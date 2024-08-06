import type { SelectProps } from './select-types';

export default function Select({ label, options }: SelectProps) {
  return (
    <div className="rounded-md flex flex-col bg-wallet-bg w-full border border-wallet-border">
      <p className="text-sm text-dark-grey ml-1 mt-0.5 truncate">{label}<sup className="text-red"> *</sup></p>
      <select className="pl-1 py-1 m-2 mb-0 font-mono text-xl h-7 text-brand-blue rounded">
        { options.map(value => <option {...{value}} className="text-sm">{value}</option>) }
      </select>
      <p className="text-red text-xs pl-2">Error description</p>
    </div>
  );
}
