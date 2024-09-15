import type { partStrProps } from './partition-string-types';

export default function PartitionString({ partStrData }: partStrProps) {
  return (
    <div className="flex flex-col px-2 py-1 justify-center items-center w-full border border-stages-border bg-stages-bg min-h-14">
      <span className="text-2xl text-info-text">
        { partStrData }
      </span>
    </div>
  );
}
