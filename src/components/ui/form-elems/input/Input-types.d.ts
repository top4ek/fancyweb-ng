import { FunctionComponent, Ref } from 'preact';

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
  iconClickHandler?: (elem: HTMLInputElement, e: Event) => void,
  iconPlace?: 'left' | 'right',
  iconToooltip?: string,
  errorText?: string,
  description?: string,
}
