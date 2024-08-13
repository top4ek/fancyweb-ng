import { useState } from 'preact/hooks';
import type { SchemaElem, FormSchema, ValidationElem, FormValidationSchema } from './useCalc-types';

export default function useCalc(formSchema: FormSchema, formValidationSchema: FormValidationSchema) {
  const [ formElemsState, setFormElemsState ] = useState(formSchema); 

  function handleOnChange(e: Event) {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) {
      const { name, value } = e.target;
      setFormElemsState({...formElemsState, [name]: getCurElemState(value, {...formElemsState[name]}, formValidationSchema[name])});
    }
  }

  function getCurElemState(value: string, curElemState: SchemaElem, elemValidators: ValidationElem[]): SchemaElem {
    for (const { fn, error, preventInput } of elemValidators) {
      if (fn(value)) continue;
      return preventInput
        ? curElemState 
        : { value, state: 'error', error };
    }
    return { value, state: 'valid', error: '' };
  }

  return { handleOnChange, formElemsState };
}
