import { FunctionComponent } from 'preact';

type ToggleButtonProps = {
  size: 'xs' | 's' | 'm' | 'l',
  initChecked?: boolean,
  disabled?: boolean,
  Icon?: FunctionComponent,
}

export default ToggleButtonProps;
