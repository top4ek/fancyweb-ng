import {useEffect, useState} from "preact/hooks";
import type { RadioProps } from './radio-types';

export default function<T extends string[]>({ name, defaultChecked, captions, changeHandler }: RadioProps<T>) {
  if ([...(new Set(captions))].length !== captions.length) {
    throw new Error('All captiona must be unique values');
  }

  const [ checked, setChecked ] = useState(captions[defaultChecked]);

  useEffect(() => console.log('Current checked:' ,checked), [checked]);

  function handleChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      setChecked(e.target.value);
      console.log(e.target.value);
      changeHandler(e.target.value);
    }
  }

  function getInputClass(caption: string) {
    return 'peer absolute opacity-0';
  }

  function getLabelClass(caption: string) {
    return `text-center min-w-24 flex flex-col justify-center cursor-pointer border-0 rounded peer-checked:bg-brand-blue peer-checked:text-white peer-[:not(:checked):hover]:bg-light-blue transition`;
  }

  return (
    <ul className="border rounded min-h-8 flex flex-row items-center flex-nowrap max-w-min p-0.5 shadow-md">
      {captions.map((caption) => (
        <li className="relative">
          <input name={name} value={caption} id={caption} checked={caption === checked} type="radio" onChange={handleChange}
            className={getInputClass(caption)}
          />
          <label for={caption} className={getLabelClass(caption)}>
            {caption}
          </label>
        </li>
      ))}
    </ul>
  );
}
