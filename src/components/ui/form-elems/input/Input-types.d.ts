import { FunctionComponent } from 'preact';

export type InputProps = {
  elemName: string,
  type: string,
  label: string,
  required?: boolean,
  value: string,
  placeholder?: string,
  Icon?: FunctionComponent,
  iconClickHandler: (e: MouseEvent) => void,
  iconPlace?: 'left' | 'right',
  iconToooltip?: string,
  state: 'default' | 'valid' | 'error' | 'disabled',
  errorText?: string,
  description?: string,
}
