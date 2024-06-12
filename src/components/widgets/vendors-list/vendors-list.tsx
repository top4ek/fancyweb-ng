import { vendorsListProps } from './types';

export default function VendorsList(props: vendorsListProps) {
  const { list } = props;
  return (
      <ul className="pb-2 flex flex-row flex-nowrap overflow-x-auto text-sm text-text-blue">
        <li className="p-[7px] border-[1px] rounded-t border-transparent border-b-grey relative hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover">
          <div className="w-[3px] h-[2px] border-[1px] border-transparent border-b-grey absolute -bottom-[1px] -right-[2px]"></div>
          <span>Recommended</span>
        </li>
        {list.map((vendor: string) => (
          <li className="p-[7px] border-[1px] text-nowrap border rounded-t border-transparent border-b-grey relative hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover">
            <div className="w-[3px] h-[2px] border-[1px] border-transparent border-b-grey absolute -bottom-[1px] -right-[2px]"></div>
            <span>{vendor}</span>
          </li>
        ))}
        <li className="p-[7px] border-[1px] text-nowrap border rounded-t border-transparent border-b-grey relative hover:border-b-white hover:border-x-grey hover:border-t-grey hover:cursor-pointer *:hover:border-0 hover:text-btn-blue-hover">
          <div className="w-[3px] h-[2px] border-[1px] border-transparent border-b-grey absolute -bottom-[1px] -right-[2px]"></div>
          <span>Full list</span>
        </li>
      </ul>
  );
}
