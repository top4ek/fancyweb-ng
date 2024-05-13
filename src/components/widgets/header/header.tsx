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
    console.log('Burger!!!');
  }

  return (
    <header className="">
      <nav className="min-h-14 flex flex-row justify-between items-center px-4 relative">
        <a href="/index" className="block w-28">
          <Logo />
        </a>
        <HeaderMenu list={headerMenuConstants} isMobMenuVisible={isMobMenuVisible}/>
        <HeaderBurgerButton clickHandler={handleBurgerClick}/>
      </nav>
    </header>
  );
}
