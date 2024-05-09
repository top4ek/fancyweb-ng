import { HeaderMenuButton as HeaderMenuButtonProps } from '../../types/types';
import UIIcons from '../../../../../assets/icons/ui';

export default function HeaderMenuButton(props: HeaderMenuButtonProps) {
  const { title } = props;
  const { Triangle } = UIIcons;

  return (
    <li>
      <button>
        <span>{title}</span>
        <Triangle />
      </button>
    </li>
  );
}
