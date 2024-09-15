import { useState } from 'preact/hooks';
import type { ElemNames, SchemaElem, FormSchema, ValidationElem, FormValidationSchema, DependancyValidableElemNames } from './useCalc-types';
import type { SliceData } from '../components/part-map/part-map-types';
import { liteConfig, ultimateConfig } from '../constants';
import { kiloBytesToBytes, megaBytesToBytes } from '../../../../../../utils/converters';

export default function useCalc(formSchema: FormSchema, formValidationSchema: FormValidationSchema) {

  const [ formElemsState, setFormElemsState ] = useState(formSchema); 
  const [ partMap, setPartMap ] = useState<SliceData[]>([]);
  const [ freeSpace, setFreeSpace ] = useState(`${megaBytesToBytes(Number.parseInt(formSchema['flash-size'].value)) / 1024} KB`);
  const [ partString, setPartString ] = useState<string>('');

  function isValidElemName(name: string): name is ElemNames {
    return Object.keys(formSchema).includes(name);
  }

  function handleOnChange(e: Event) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
      const { name, value } = e.target;
      if (isValidElemName(name)) {
        setFormElemsState({...formElemsState, [name]: getCurElemState(value, {...formElemsState[name]}, formValidationSchema[name])});
        const curFormElemsState = {...formElemsState, [name]: getCurElemState(value, {...formElemsState[name]}, formValidationSchema[name])};
        const curFormElemsStateDepCheck = validateDependencies(curFormElemsState);
        setFormElemsState(curFormElemsStateDepCheck);
        setPartMap(getPartMapSlices(curFormElemsStateDepCheck) as SliceData[]);
        getFreeSpace(curFormElemsStateDepCheck);
        setPartString('');
      }
    }
  }

  function getCurElemState(value: string, curElemState: SchemaElem, elemValidators: ValidationElem[]): SchemaElem {
    for (const { fn, error, preventInput } of elemValidators) {
      if (fn(value)) continue;
      return preventInput
        ? curElemState 
        : { value, state: 'error', error };
    }
    
    return value === ''
      ? { value, state: 'default', error: '' }
      : { value, state: 'valid', error: '' };
  }

  function validateDependencies(curFormElemsState: FormSchema ): FormSchema {
    const elemNames = Object.keys(formElemsState).filter(elemName => /^part[0-7]-size$/.test(elemName) || elemName === 'initial-offset') as DependancyValidableElemNames[];
    const curFormElemsStateDepCheck: FormSchema = { ...curFormElemsState };
    const size = curFormElemsState['flash-size'].value;
    const offset = curFormElemsState['initial-offset'].value;
    const part0Size = curFormElemsState['part0-size'].value;
    const part1Size = curFormElemsState['part1-size'].value;
    const part2Size = curFormElemsState['part2-size'].value;
    const part3Size = curFormElemsState['part3-size'].value;
    const part4Size = curFormElemsState['part4-size'].value;
    const part5Size = curFormElemsState['part5-size'].value;
    const part6Size = curFormElemsState['part6-size'].value;
    const part7Size = curFormElemsState['part7-size'].value;

    const isElemValid = (name: DependancyValidableElemNames, value: string) => {
        const res = getCurElemState(value, curFormElemsStateDepCheck[name], formValidationSchema[name]);
        return res.state === 'error' ? false : true;
    }

    const isPrevElemsValid = (curElem: DependancyValidableElemNames) => {
      const prevElems = elemNames.slice(0, elemNames.findIndex(elem => curElem === elem));
      return !prevElems.some(el => curFormElemsStateDepCheck[el].state === 'error');
    }

    const validators: Record<DependancyValidableElemNames, () => void> = {
      'initial-offset': () => {
        if (!isElemValid('initial-offset', offset)) return; 
        if (megaBytesToBytes(Number.parseInt(size)) <= Number.parseInt(offset)) {
          curFormElemsStateDepCheck['initial-offset'] = { value: offset, state: 'error', error: 'Offset must be less than flash size' };
        } else {
          curFormElemsStateDepCheck['initial-offset'] = { value: offset, state: 'valid', error: '' };
        }
      },
      'part0-size': () => {
        if (!part0Size || !isElemValid('part0-size', part0Size)) return;
        if (!isElemValid('initial-offset', offset)) {
          curFormElemsStateDepCheck['part0-size'] = { value: part0Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (
         kiloBytesToBytes(Number.parseInt(part0Size)) > (megaBytesToBytes(Number.parseInt(size)) - Number.parseInt(offset))
        ) {
          curFormElemsStateDepCheck['part0-size'] = { value: part0Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part0-size'] = { value: part0Size, state: 'valid', error: '' };
        }
      },
      'part1-size': () => {
        if (!part1Size || !isElemValid('part1-size', part1Size)) return;
        if (!isPrevElemsValid('part1-size')) {
          curFormElemsStateDepCheck['part1-size'] = { value: part1Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part0Size) {
          curFormElemsStateDepCheck['part1-size'] = { value: part1Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
         kiloBytesToBytes(Number.parseInt(part1Size)) > (megaBytesToBytes(Number.parseInt(size)) - Number.parseInt(offset) - kiloBytesToBytes(Number.parseInt(part0Size)))
        ) {
          curFormElemsStateDepCheck['part1-size'] = { value: part1Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part1-size'] = { value: part1Size, state: 'valid', error: '' };
        }
      },
      'part2-size': () => {
        if (!part2Size || !isElemValid('part2-size', part2Size)) return;
        if (!isPrevElemsValid('part2-size')) {
          curFormElemsStateDepCheck['part2-size'] = { value: part2Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part1Size) {
          curFormElemsStateDepCheck['part2-size'] = { value: part2Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
          kiloBytesToBytes(Number.parseInt(part2Size)) > (
            megaBytesToBytes(Number.parseInt(size)) -
            Number.parseInt(offset) -
            kiloBytesToBytes(Number.parseInt(part0Size)) -
            kiloBytesToBytes(Number.parseInt(part1Size))
          )
        ) {
          curFormElemsStateDepCheck['part2-size'] = { value: part2Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part2-size'] = { value: part2Size, state: 'valid', error: '' };
        }
      },
      'part3-size': () => {
        if (!part3Size || !isElemValid('part3-size', part3Size)) return;
        if (!isPrevElemsValid('part3-size')) {
          curFormElemsStateDepCheck['part3-size'] = { value: part3Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part2Size) {
          curFormElemsStateDepCheck['part3-size'] = { value: part3Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
          kiloBytesToBytes(Number.parseInt(part3Size)) > (
            megaBytesToBytes(Number.parseInt(size)) -
            Number.parseInt(offset) -
            kiloBytesToBytes(Number.parseInt(part0Size)) -
            kiloBytesToBytes(Number.parseInt(part1Size)) -
            kiloBytesToBytes(Number.parseInt(part2Size))
          )
        ) {
          curFormElemsStateDepCheck['part3-size'] = { value: part3Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part3-size'] = { value: part3Size, state: 'valid', error: '' };
        }
      },
      'part4-size': () => {
        if (!part4Size || !isElemValid('part4-size', part4Size)) return;
        if (!isPrevElemsValid('part4-size')) {
          curFormElemsStateDepCheck['part4-size'] = { value: part4Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part3Size) {
          curFormElemsStateDepCheck['part4-size'] = { value: part4Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
          kiloBytesToBytes(Number.parseInt(part4Size)) > (
            megaBytesToBytes(Number.parseInt(size)) -
            Number.parseInt(offset) -
            kiloBytesToBytes(Number.parseInt(part0Size)) -
            kiloBytesToBytes(Number.parseInt(part1Size)) -
            kiloBytesToBytes(Number.parseInt(part2Size)) -
            kiloBytesToBytes(Number.parseInt(part3Size))
          )
        ) {
          curFormElemsStateDepCheck['part4-size'] = { value: part4Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part4-size'] = { value: part4Size, state: 'valid', error: '' };
        }
      },
      'part5-size': () => {
        if (!part5Size || !isElemValid('part5-size', part5Size)) return;
        if (!isPrevElemsValid('part5-size')) {
          curFormElemsStateDepCheck['part5-size'] = { value: part5Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part4Size) {
          curFormElemsStateDepCheck['part5-size'] = { value: part5Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
          kiloBytesToBytes(Number.parseInt(part5Size)) > (
            megaBytesToBytes(Number.parseInt(size)) -
            Number.parseInt(offset) -
            kiloBytesToBytes(Number.parseInt(part0Size)) -
            kiloBytesToBytes(Number.parseInt(part1Size)) -
            kiloBytesToBytes(Number.parseInt(part2Size)) -
            kiloBytesToBytes(Number.parseInt(part3Size)) -
            kiloBytesToBytes(Number.parseInt(part4Size))
          )
        ) {
          curFormElemsStateDepCheck['part5-size'] = { value: part5Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part5-size'] = { value: part5Size, state: 'valid', error: '' };
        }
      },
      'part6-size': () => {
        if (!part6Size || !isElemValid('part6-size', part6Size)) return;
        if (!isPrevElemsValid('part6-size')) {
          curFormElemsStateDepCheck['part6-size'] = { value: part6Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part5Size) {
          curFormElemsStateDepCheck['part6-size'] = { value: part6Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
          kiloBytesToBytes(Number.parseInt(part6Size)) > (
            megaBytesToBytes(Number.parseInt(size)) -
            Number.parseInt(offset) -
            kiloBytesToBytes(Number.parseInt(part0Size)) -
            kiloBytesToBytes(Number.parseInt(part1Size)) -
            kiloBytesToBytes(Number.parseInt(part2Size)) -
            kiloBytesToBytes(Number.parseInt(part3Size)) -
            kiloBytesToBytes(Number.parseInt(part4Size)) -
            kiloBytesToBytes(Number.parseInt(part5Size))
          )
        ) {
          curFormElemsStateDepCheck['part6-size'] = { value: part6Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part6-size'] = { value: part6Size, state: 'valid', error: '' };
        }
      },
      'part7-size': () => {
        if (!part7Size || !isElemValid('part7-size', part7Size)) return;
        if (!isPrevElemsValid('part7-size')) {
          curFormElemsStateDepCheck['part7-size'] = { value: part7Size, state: 'error', error: 'Previous fields are incorrect' };
          return;
        }
        if (!part6Size) {
          curFormElemsStateDepCheck['part7-size'] = { value: part7Size, state: 'error', error: 'Fill previous field' };
          return;
        }
        if (
          kiloBytesToBytes(Number.parseInt(part7Size)) > (
            megaBytesToBytes(Number.parseInt(size)) -
            Number.parseInt(offset) -
            kiloBytesToBytes(Number.parseInt(part0Size)) -
            kiloBytesToBytes(Number.parseInt(part1Size)) -
            kiloBytesToBytes(Number.parseInt(part2Size)) -
            kiloBytesToBytes(Number.parseInt(part3Size)) -
            kiloBytesToBytes(Number.parseInt(part4Size)) -
            kiloBytesToBytes(Number.parseInt(part5Size)) -
            kiloBytesToBytes(Number.parseInt(part6Size))
          )
        ) {
          curFormElemsStateDepCheck['part7-size'] = { value: part7Size, state: 'error', error: 'Out of free space' };
        } else {
          curFormElemsStateDepCheck['part7-size'] = { value: part7Size, state: 'valid', error: '' };
        }
      },
    }

    for (const elemName of elemNames) {
      validators[elemName]();
    }
    return curFormElemsStateDepCheck;
  }

  function usePredefinedConfig(configName: 'lite' | 'ultimate') {
    const configs = {
      lite: liteConfig,
      ultimate: ultimateConfig,
    }

    const elemNames = Object.keys(formElemsState).filter(elemName => /^part[0-7]-size$/.test(elemName)) as DependancyValidableElemNames[];
    let tempFormElemsState = { ...formElemsState, ...configs[configName] };
    for (let i = 0; i < elemNames.length; i++) {
      tempFormElemsState = { ...tempFormElemsState, ...{
          [`part${i}-start`]: {
            value: '',
            state: 'default',
            error: '',
          },
          [`part${i}-size-hex`]: {
            value: '',
            state: 'default',
            error: '',
          },
          [`part${i}-end`]: {
            value: '',
            state: 'default',
            error: '',
          },
      },
      };
    }
    setFormElemsState(tempFormElemsState);
    setPartMap(getPartMapSlices(tempFormElemsState) as SliceData[]);
    getFreeSpace(tempFormElemsState);
    setPartString('');
  }

  function useLiteConfig() {
    usePredefinedConfig('lite');
  }

  function useUltimateConfig() {
    usePredefinedConfig('ultimate');
  }
  
  const getAddresses = (sizeKb: number, start: number): {start: string, size: string, end: string} => {
    const sizeBytes = kiloBytesToBytes(sizeKb);
    return {
      start: `0x${start.toString(16)}`,
      size: `0x${sizeBytes.toString(16)}`,
      end: `0x${(start+sizeBytes-1).toString(16)}`,
    };
  }

  function recalculate() {
    const elemNames = Object.keys(formElemsState).filter(elemName => /^part[0-7]-size$/.test(elemName)) as DependancyValidableElemNames[];
    if (formElemsState['MTD-device-name'].value === '') {
      setFormElemsState({...formElemsState, 'MTD-device-name': { value: '', state: 'error', error: 'Required field' }});
      return;
    }

    if (elemNames.some(el => formElemsState[el].state === 'error')) return;
    
    let tempFormElemsState = { ...formElemsState };
    for (let i = 0; i < elemNames.length; i++) {
      tempFormElemsState = {
        ...tempFormElemsState, 
        ...{
          [`part${i}-start`]: {
            value: '',
            state: 'default',
            error: '',
          },
          [`part${i}-size-hex`]: {
            value: '',
            state: 'default',
            error: '',
          },
          [`part${i}-end`]: {
            value: '',
            state: 'default',
            error: '',
          },
        },
      };
    }

    for (let i = 0; i < elemNames.length; i++) {
      if (tempFormElemsState[elemNames[i]].state === 'valid') {
        const addresses = getAddresses(Number.parseInt(tempFormElemsState[elemNames[i]].value), i > 0 ? Number.parseInt(tempFormElemsState[(`part${i-1}-end`) as unknown as DependancyValidableElemNames].value, 16) + 1 : Number.parseInt(tempFormElemsState['initial-offset'].value, 16));
        tempFormElemsState = {
          ...tempFormElemsState, 
          ...{
            [`part${i}-start`]: {
              value: addresses.start,
              state: 'default',
              error: '',
            },
            [`part${i}-size-hex`]: {
              value: addresses.size,
              state: 'default',
              error: '',
            },
            [`part${i}-end`]: {
              value: addresses.end,
              state: 'default',
              error: '',
            },
          },
        };
      } else {
        if (tempFormElemsState[elemNames[i]].state === 'error') return;
        break;
      }
    }
    setFormElemsState(tempFormElemsState);
    setPartString(getPartString(tempFormElemsState));
  }

  function getPartMapSlices(formState: FormSchema) {
    const size = Number.parseInt(formState['flash-size'].value);
    const slices = Object.entries(formState)
    .filter(entry => /^part\d-size$/i.test(entry[0]))
    .reduce((acc: string[] | [] , el): string[] => [...acc, ...(el[1].value && el[1].state === 'valid' ? [el[1].value] : [])], [])
    .map(slice => Math.round(kiloBytesToBytes(Number.parseInt(slice)) / megaBytesToBytes(size) * 100))
    .map(slice => slice === 0 ? 1 : slice)
    .map((slice, i) => ({ width: slice, color: `partition${i}` }));

    return slices;
  }

  function getFreeSpace(formState: FormSchema) {
    const countableFields = Object.keys(formState).filter(key => /^part\d-size$/i.test(key));
    const flashSize = megaBytesToBytes(Number.parseInt(formState['flash-size'].value));
    let freeSpace = flashSize;
    if (formState['initial-offset'].state === 'valid') {
      freeSpace = flashSize - Number.parseInt(formState['initial-offset'].value);
    } else {
      setFreeSpace(freeSpace % 1024 === 0 ? `${freeSpace / 1024} KB` : `${Math.floor(freeSpace / 1024)} KB, ${freeSpace % 1024} bytes`);
      return;
    }
    for (const field of countableFields) {
      const { value, state } = formState[field as ElemNames];
      if (state === 'valid') {
        freeSpace = freeSpace - kiloBytesToBytes(Number.parseInt(value));
      } else {
        setFreeSpace(freeSpace % 1024 === 0 ? `${freeSpace / 1024} KB` : `${Math.floor(freeSpace / 1024)} KB, ${freeSpace % 1024} bytes`);
        break;
      }
    }
    setFreeSpace(freeSpace % 1024 === 0 ? `${freeSpace / 1024} KB` : `${Math.floor(freeSpace / 1024)} KB, ${freeSpace % 1024} bytes`);
  }

  function getPartString(formState: FormSchema) {
    return Object.keys(formState)
      .filter((key) => /part\d+-size/i.test(key) && formState[key as ElemNames].state === 'valid')
      .map((size, i) => [formState[`part${i}-name` as ElemNames].value, formState[size as ElemNames].value])
      .reduce((acc, entry) => acc + `${entry[1]}k(${entry[0]}),`, `${formState['MTD-device-name'].value}:`)
      .slice(0, -1);
  }

  function handleRecalculateBtnClick() {
    recalculate();
  }

  return { handleOnChange, handleRecalculateBtnClick, formElemsState, useLiteConfig, useUltimateConfig, partMap, freeSpace, partString };
}
