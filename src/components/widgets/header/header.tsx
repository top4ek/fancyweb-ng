import HeaderMenu from '../header-menu/header-menu';
import HeaderBurgerButton from '../header-burger-button/header-burger-button';
import UIIcons from '../../../assets/icons/ui';
import { useState } from 'preact/hooks';
import { headerMenuConstants } from '../header-menu/constants';

export default function Header() {
  const { Logo } = UIIcons;
  const [ isMobMenuVisible, setMobMenuVisible ] = useState(false);

  function handleBurgerClick() {
    setMobMenuVisible(!isMobMenuVisible);
  }

  return (
    <header className="min-h-14 flex flex-col justify-center items-start">
      <div className="min-h-14 flex flex-row flex-nowrap items-center w-full px-2.5">
        <div className="flex-none w-32">
          <Logo /> 
        </div>
        <div className="ml-auto">
          { window.innerWidth < 800
            ?  <HeaderBurgerButton clickHandler={handleBurgerClick} />
            :  <HeaderMenu list={headerMenuConstants} />
          }
        </div>
      </div>
      { window.innerWidth < 800 && isMobMenuVisible && 
        <div className="max-h-0 relative w-full">
            <div className="px-2.5 opacity-90 bg-brand-blue w-full absolute top-0">
              <HeaderMenu list={headerMenuConstants} />
            </div>
        </div>
      }
    </header>
  );
}
