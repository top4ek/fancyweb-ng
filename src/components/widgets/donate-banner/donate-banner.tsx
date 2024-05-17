import { DonateBannerProps } from './types';
import { donateBannerConstants } from './constants';
import  UIIcons from '../../../assets/icons/ui';

export default function DonateBanner(props: DonateBannerProps) {
  const { size } = props;
  const { Coin } = UIIcons;

  return (
    <div className={`${size === 'big' && 'bg-donban-bg border border-light-blue rounded-md w-full min-w-fit flex flex-row p-1'}`}>
      <div className="basis-2/12 flex flex-row justify-center items-center max-w-16 *:w-[clamp(36px,11vw,60px)] *:h-[clamp(36px,11vw,50px)]">
        <Coin />
      </div>
      <div className="basis-10/12 text-action-blue flex flex-col gap-y-0.5 p-1">
        <p className="text-[clamp(12px,6vw,24px)] font-normal">{donateBannerConstants.text[0]}</p>
        <p className="text-xs">
          <a className="text-brand-blue text-[clamp(10px,3.5vw,18px)] underline" href={donateBannerConstants.link.href}>{donateBannerConstants.link.text}</a>
          {donateBannerConstants.text[1]}
        </p>
      </div>
    </div>
  );
}
