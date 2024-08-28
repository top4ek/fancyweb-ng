import type { SelectProps } from './select-types';

export default function Select({ elemName, value, label, options, required, onChange, state, errorText }: SelectProps) {
  const borderColor: Record<SelectProps['state'], string> = {
    default: '',
    valid: 'border-green',
    error: 'border-red',
    disabled: '',
  }

  return (
    <div className="rounded-md flex flex-col bg-wallet-bg w-full border border-wallet-border">
      <p className="text-sm text-dark-grey ml-1 mt-0.5 w-fit truncate">{label}{required && <sup className="text-red"> *</sup>}</p>
      <select name={elemName} className={`pl-1 py-1 m-2 mb-0 font-mono text-xl h-7 text-brand-blue rounded border ${borderColor[state]}`} {...{onChange}}>
        { options.map(({option, text}) => <option value={option} selected={option === value} className="text-sm">{text}</option>) }
      </select>
      <p className="text-red text-xs pl-3 min-h-5">{state === 'error' && (errorText ?? '')}</p>
    </div>
  );
}
