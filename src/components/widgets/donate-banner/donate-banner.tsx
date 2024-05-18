import { DonateBannerProps } from './types';
import { donateBannerConstants } from './constants';
import  UIIcons from '../../../assets/icons/ui';
import { JSX } from 'preact/jsx-runtime';

export default function DonateBanner(props: DonateBannerProps) {
  const { size } = props;
  const { Coin, OpenCollective } = UIIcons;

  type Sizes = DonateBannerProps['size'];

  function getProperBannerSize(d: Sizes):JSX.Element {
    const bannerShop: Record<Sizes, () => JSX.Element> = {
      'small': () => (
        <a className="block" href={donateBannerConstants.small.link.href}>
          <div className="max-w-80 bg-gradient-to-t from-opencol-donban-bg-from to-opencol-donban-bg-to p-0.5 rounded-full flex flex-row justify-between items-center text-white font-medium">
              <div className="flex flex-row justify-center items-center grow shrink">
                <p className="text-sm tracking-widest">{donateBannerConstants.small.text}</p>
              </div> 
              <div className="bg-white w-12 h-12 rounded-full flex flex-col justify-center items-center grow-0 shrink-0 *:w-9 *:h-9">
                <OpenCollective />
              </div>
          </div>
        </a>
      ),
      'big': () => (
        <div className="bg-donban-bg border border-light-blue rounded-md w-full min-w-fit flex flex-row p-1">
          <div className="basis-2/12 flex flex-row justify-center items-center max-w-16 *:w-[clamp(36px,11vw,60px)] *:h-[clamp(36px,11vw,50px)]">
            <Coin />
          </div>
          <div className="basis-10/12 text-action-blue flex flex-col gap-y-0.5 p-1">
            <p className="text-[clamp(12px,6vw,24px)] font-normal">{donateBannerConstants.big.text[0]}</p>
            <p className="text-xs">
              <a className="text-brand-blue text-[clamp(10px,3.5vw,18px)] underline" href={donateBannerConstants.big.link.href}>{donateBannerConstants.big.link.text}</a>
              {donateBannerConstants.big.text[1]}
            </p>
          </div>
        </div>
      ),
    };
    return bannerShop[d]();
  };

  return getProperBannerSize(size);
}
