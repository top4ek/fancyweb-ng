import type { State } from '../../types';
import type { SelectOption } from '../../types';

export type SelectProps = {
  label: string,
  value: string,
  elemName: string,
  options: SelectOption[],
  required?: boolean,
  onChange: (e: Event) => void,
  state: State,
  errorText?: string,
}
