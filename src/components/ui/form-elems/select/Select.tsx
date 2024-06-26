import type { SelectProps } from './select-types';

export default function Select({elemName, label, options, required, description}: SelectProps) {

  return (
    <div className="w-full">
      <label for={elemName} className="text-sm">{label}{required && <span className="pl-1 text-crimson">*</span>}</label>
      <select className="h-9 w-full px-2 outline outline-0 border rounded hover:outline-1 bg-white focuse:outline-none border-grey hover:outline-grey focus:bg-donban-bg">
        {options.map(({value, disabled}) => <option value={value} {...(disabled && {disabled: disabled})}>{value}</option>)}
      </select>
      <div>
        <span className="text-sm">{description ?? ''}</span>
      </div>
    </div>
  );
}
