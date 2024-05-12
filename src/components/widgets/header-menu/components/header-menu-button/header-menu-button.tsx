import { useSignalEffect } from '@preact/signals';
import { Button } from '../../types/types';
import HeaderMenuLink from '../header-menu-link/header-menu-link';
import UIIcons from '../../../../../assets/icons/ui';
import {useState} from 'preact/hooks';

export default function HeaderMenuButton(props: Button) {
  const { title, children, signal } = props;
  const { Triangle } = UIIcons;
  const [isVisible, setVisible] = useState(false);

  function handleClick() {
    signal.value = !isVisible;
    setVisible(!isVisible);
  }

  useSignalEffect(() => {
    signal.value;
    if (window.innerWidth > 800) {
      setVisible(false);
      signal.value = false;
    }
  });

  return (
    <li className="md:relative">
      <button className={"text-white opacity-60 hover:opacity-100 flex flex-row items-center gap-x-0.5 md:px-2"} onClick={handleClick}>
        <span>{title}</span>
        <Triangle />
      </button>
      {isVisible && <ul className={"pl-2.5 md:pl-0 max-h-fit md:absolute md:top-10 md:right-0 bg-brand-blue md:min-w-max"}>
        {children.map(link => <HeaderMenuLink title={link.title} link={link.link} />)}
      </ul>}
    </li>
  );
}
