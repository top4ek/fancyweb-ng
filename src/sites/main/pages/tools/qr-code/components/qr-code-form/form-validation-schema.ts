import type { FormValidationSchema } from "../../../../../../../utils/hooks/useForm-types"
export const QRCodeFormValidationSchema: FormValidationSchema = {
  ssid: [
    {
      fn: (value: string) => !!value,
      error: 'Required field',
    },
  ],
  password: [
    {
      fn: (value: string) => !!value,
      error: 'Required field',
    },
    {
      fn: (value: string) => value.length >= 8,
      error: 'The password must to be at least 8 charaters long',
    },
  ],
}
