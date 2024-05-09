import IconButton from '../../ui/buttons/icon-button/icon-button';
import UIIcons from '../../../assets/icons/ui';
import { useState } from 'preact/hooks';

const { Burger, Cross } = UIIcons;

export default function HeaderBurgerButton() {
  const [isActive, setActivityState] = useState(false);

  function handleClik(evt: MouseEvent) {
    evt.preventDefault();
    console.log('Clicked!');
    setActivityState(!isActive);
  }

  return (
    <IconButton clickHandler={handleClik} withBorder={true}>
      {isActive ? <Cross /> : <Burger />}
    </IconButton>
  );
}
