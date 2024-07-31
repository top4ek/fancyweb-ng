import type ToggleButtonProps from './toggle-button-types';
import { useState } from 'preact/hooks';

export default function ToggleButton({ size, initChecked, disabled, Icon }: ToggleButtonProps) {
  const [ checked, setChecked ] = useState<boolean>(initChecked ?? false);

  function changeHandler() {
    setChecked(!checked);
  }

  function getSize(size: ToggleButtonProps['size']) {
    const sizes:Record<ToggleButtonProps['size'], string> = {
      xs: 'w-16 h-8',
      s: 'w-28 h-8',
      m: 'w-60 h-8',
      l: 'w-72 h-12',
    };
    return sizes[size]; 
  }

  function getClass() {
    const baseClass = `block border border-0 rounded-md relative overflow-hidden flex flex-row justify-center items-center ${getSize(size)}`;
    if (disabled) return `${baseClass} bg-grey flex flex-row justify-center items-center`;
    return checked
      ? `${baseClass} bg-btn-blue-click shadow-[inset_3px_3px_6px_#000051]`
      : `${baseClass} bg-brand-blue`; 
  }

  return (
    <div className="max-w-min rounded">
      <label className={getClass()}>
        {Icon && <Icon />}
        <input type="checkbox" onChange={changeHandler} {...{checked, disabled}} className="w-0 h-0 absolute -top-1" />
      </label>
    </div>
  );
}
