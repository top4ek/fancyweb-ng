import type { State } from '../../types';

export type SelectProps = {
  label: string,
  elemName: string,
  options: string[],
  required?: boolean,
  onChange: (e: Event) => void,
  state: State,
  errorText?: string,
}
