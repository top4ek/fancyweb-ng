export type InputProps = {
  elemName: string,
  label: string,
  borderWidth: '1px' | '4px',
  borderColor: 'default' | 'partition0' | 'partition1' | 'partition2' | 'partition3' | 'partition4' | 'partition5' | 'partition6' | 'partition7',
  value: string,
  dir?: 'ltr' | 'rtl',
  required?: boolean,
}
