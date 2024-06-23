import { FunctionComponent } from 'preact';
import {ChangeEvent} from 'preact/compat';

export type InputProps = {
  elemName: string,
  type: string,
  label: string,
  state: 'default' | 'valid' | 'error' | 'disabled',
  onInput: (e: Event) => void,
  required?: boolean,
  value?: string,
  placeholder?: string,
  Icon?: FunctionComponent,
  iconClickHandler?: (e: MouseEvent) => void,
  iconPlace?: 'left' | 'right',
  iconToooltip?: string,
  errorText?: string,
  description?: string,
}
