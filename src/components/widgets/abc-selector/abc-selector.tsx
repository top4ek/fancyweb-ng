import { AbcSelectorProps } from './types';

export default function AbcSelector(props: AbcSelectorProps) {
  const { letters, curSelected, clickHandler } = props;

  const handleClick = (e: MouseEvent) => {
    const letterContainer = e.currentTarget;
    if (letterContainer instanceof HTMLLIElement) {
      const letter = letterContainer!.getElementsByTagName('span')[0].innerText;
      clickHandler(letter);
    }
  }

  return (
    <div className="max-w-full overflow-x-auto">
      <ul className="pb-2 flex flex-row flex-nowrap text-sm text-text-blue">
        <li className={`p-[7px] border-[1px] rounded-t border-transparent border-b-grey relative ${curSelected && 'Recommended'.toLowerCase() === curSelected!.toLowerCase() && 'border-b-white border-x-grey border-t-grey *:border-0 hover:text-btn-blue-hover'} hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover`} onClick={handleClick}>
          <div className="w-[3px] h-[2px] border-[1px] border-transparent border-b-grey absolute -bottom-[1px] -right-[2px]"></div>
          <span>Recommended</span>
        </li>
        <li className={`p-[7px] border-[1px] text-nowrap border rounded-t border-transparent border-b-grey relative ${curSelected && 'Full list'.toLowerCase() === curSelected!.toLowerCase() && 'border-b-white border-x-grey border-t-grey *:border-0 hover:text-btn-blue-hover'} hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover`} onClick={handleClick}>
          <div className="w-[3px] h-[2px] border-[1px] border-transparent border-b-grey absolute -bottom-[1px] -right-[2px]"></div>
          <span>Full list</span>
        </li>
        {letters.map((letter: string) => (
          <li className={`py-[7px] px-[12px] border-[1px] text-nowrap border rounded-t border-transparent border-b-grey relative ${curSelected && letter.toLowerCase() === curSelected!.toLowerCase() && 'border-b-white border-x-grey border-t-grey *:border-0 hover:text-btn-blue-hover'} hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover`} onClick={handleClick}>
            <div className="w-[3px] h-[2px] border-[1px] border-transparent border-b-grey absolute -bottom-[1px] -right-[2px]"></div>
            <span>{letter}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
