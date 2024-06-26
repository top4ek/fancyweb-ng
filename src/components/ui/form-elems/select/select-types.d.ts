export type SelectProps = {
  elemName: string,
  label: string,
  options: {
    value: string,
    disabled?: boolean,
  }[],
  required?: boolean,
  description?: string,
}
