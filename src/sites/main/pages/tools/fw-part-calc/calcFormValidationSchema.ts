import type { FormValidationSchema } from './hooks/useCalc-types';
import { isDecOrHexNumber, isNonEmpty } from '../../../../../utils/validators';

export const FwCalcFormValidationSchema: FormValidationSchema = {
  'MTD-device-name': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
  'flash-size': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
  ],
  'initial-offset': [
    {
      fn: isNonEmpty,
      error: 'Required field',
    },
    {
      fn: isDecOrHexNumber,
      preventInput: true,
      error: '',
    },
    {
      fn: (val) => {
        if (val === '0') return true;
        if (val === '0X' || val === '0x') return false;
        return isDecOrHexNumber(val);
      },
      error: 'Invalid hexademical number',
    },
  ],
}
