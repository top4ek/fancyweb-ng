import { FormSchema } from './hooks/useCalc-types';

export const FwCalcFormSchema:FormSchema = {
  'MTD-device-name': {
    value: '',
    state: 'default',
    error: '',
  },
  'flash-size': {
    value: '',
    state: 'default',
    error: '',
  },
  'initial-offset': {
    value: '0x0',
    state: 'valid',
    error: '',
  },
}
