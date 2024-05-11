import { Button } from '../../types/types';
import HeaderMenuLink from '../header-menu-link/header-menu-link';
import UIIcons from '../../../../../assets/icons/ui';
import {useState} from 'preact/hooks';

export default function HeaderMenuButton(props: Button) {
  const { title, children } = props;
  const { Triangle } = UIIcons;
  const [isVisible, setVisible] = useState(false);

  function handleClick() {
    setVisible(!isVisible);
  }

  return (
    <li>
      <button className={"text-white opacity-60 hover:opacity-100 flex flex-row items-center gap-x-0.5"} onClick={handleClick}>
        <span>{title}</span>
        <Triangle />
      </button>
      {isVisible && <ul className={"pl-2.5"}>
        {children.map(link => <HeaderMenuLink title={link.title} link={link.link} />)}
      </ul>}
    </li>
  );
}
