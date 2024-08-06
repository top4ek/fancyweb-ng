import type { InputProps } from './input-types';

export default function Input({ elemName, label, borderWidth, borderColor, dir, required, value }: InputProps) {

  const borderWidthClasses: Record<InputProps['borderWidth'], string> = {
    '1px': 'border-[1px]',
    '4px': 'border-[4px]',
  }

  const borderColorClasses: Record<InputProps['borderColor'], string> = {
    'default':  'border-wallet-border',
    'partition0': 'border-partition0',
    'partition1': 'border-partition1',
    'partition2': 'border-partition2',
    'partition3': 'border-partition3',
    'partition4': 'border-partition4',
    'partition5': 'border-partition5',
    'partition6': 'border-partition6',
    'partition7': 'border-partition7',
  }

  return (
    <div className={`border ${borderWidthClasses[borderWidth]} ${borderColorClasses[borderColor]} rounded-md flex flex-col has-[:focus]:outline has-[:focus]:outline-[4px] has-[:focus]:outline-stages-border bg-wallet-bg`}>
      <label for={elemName} className="text-sm text-dark-grey ml-1 mt-0.5 truncate">{label}{required && <sup className="text-red"> *</sup>}</label>
      <input name={elemName} id={elemName} {...{dir, value}} className="p-1 m-2 mb-0 font-mono text-xl h-7 focus:border-none focus:outline-none"/>
      <p className="text-red text-xs pl-2">Error description</p>
    </div>
  );
}
