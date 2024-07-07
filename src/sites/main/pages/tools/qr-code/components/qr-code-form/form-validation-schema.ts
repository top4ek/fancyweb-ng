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
  ],
}
