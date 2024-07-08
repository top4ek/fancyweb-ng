import {useState} from "preact/hooks";
import type { RadioProps } from './radio-types';

export default function<T extends string[]>({ name, defaultChecked, captions, changeHandler }: RadioProps<T>) {
  if ([...(new Set(captions))].length !== captions.length) {
    throw new Error('All captiona must be unique values');
  }

  const [ checked, setChecked ] = useState(captions[defaultChecked]);

  function handleChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      setChecked(e.target.value);
      changeHandler(e.target.value);
    }
  }

  return (
    <div>
      {captions.map(caption => (
        <>
          <label for={caption}>{caption}</label>
          <input name={name} value={caption} checked={caption === checked} type="radio" onChange={handleChange} />
        </>
      ))}
    </div>
  );
}
