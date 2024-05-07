import { ComponentChildren } from 'preact';
import UIIcons from '../../../../assets/icons/ui';

interface IconButtonProps {
  children: ComponentChildren;
}

export default function IconButton(props: IconButtonProps) {
  const { children } = props;
  return (
    <button style="border: 1px solid black;">
      {children}
    </button>
  );
}
