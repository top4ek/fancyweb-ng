import { OutputProps } from './output-types';

export default function Output({ label, data }: OutputProps) {
  return (
    <div className="rounded-md flex flex-col bg-wallet-bg">
      <p className="text-sm text-dark-grey ml-1 mt-0.5">{label}</p>
      <p className="pl-1 py-1 m-2 font-mono text-xl h-7 text-brand-blue" dir="rtl">{data}</p>
    </div>
  );
}
