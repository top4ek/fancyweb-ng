import { FormSchema } from '../hooks/useCalc-types';
import type { SelectOption } from '../types';

export const MTDDevNameOpts: SelectOption[] = [
  {
    option: '',
    text: '',
  },
  { option: 'hi_sfc',
    text: 'hi_sfc', 
  },
  {
    option: 'hinand',
    text: 'hinand',
  },
  {
    option: 'jz_sfc',
    text: 'jz_sfc',
  },
  {
    option: 'nor-flash',
    text: 'nor-flash',
  },
  {
    option: 'NOR_FLASH',
    text: 'NOR_FLASH',
  }, 
  {
    option: 'sfc',
    text: 'sfc',
  },
  {
    option: 'spi0.0',
    text: 'spi0.0',
  },
  {
    option: 'spi_flash',
    text: 'spi_flash',
  },
  {
    option: 'xm_sfc',
    text: 'xm_sfc',
  },
];

export const flashSizeOpts: SelectOption[] = [
  {
    option: '4',
    text: 'NOR 4',
  },
  {
    option: '8',
    text: 'NOR 8',
  },
  {
    option: '16',
    text: 'NOR 16',
  },
  {
   option: '32',
   text: 'NOR 32',
  },
  {
    option: '128',
    text: 'NAND 128',
  },
  {
    option: '256',
    text: 'NAND 256',
  },
  {
    option: '512',
    text: 'NAND 512'
  },
];

export const liteConfig: Pick<FormSchema, 'MTD-device-name' | 'flash-size' | 'initial-offset' | `part${0|1|2|3|4}-name` | `part${0|1|2|3|4}-size`>  = {
  'MTD-device-name': {
    value: '',
    state: 'default',
    error: '',
  },
  'flash-size': {
    value: '8',
    state: 'valid',
    error: '',
  },
  'initial-offset': {
    value: '0x0',
    state: 'valid',
    error: '',
  },
  'part0-name': {
    value: 'boot',
    state: 'valid',
    error: '',
  },
  'part0-size': {
    value: '256',
    state: 'valid',
    error: '',
  },
  'part1-name': {
    value: 'env',
    state: 'valid',
    error: '',
  },
  'part1-size': {
    value: '64',
    state: 'valid',
    error: '',
  },
  'part2-name': {
    value: 'kernel',
    state: 'valid',
    error: '',
  },
  'part2-size': {
    value: '2048',
    state: 'valid',
    error: '',
  },
  'part3-name': {
    value: 'rootfs',
    state: 'valid',
    error: '',
  },
  'part3-size': {
    value: '5120',
    state: 'valid',
    error: '',
  },
  'part4-name': {
    value: 'rootfs_data',
    state: 'valid',
    error: '',
  },
  'part4-size': {
    value: '704',
    state: 'valid',
    error: '',
  },
}
export const ultimateConfig: Pick<FormSchema, 'MTD-device-name' | 'flash-size' | 'initial-offset' | `part${0|1|2|3|4}-name` | `part${0|1|2|3|4}-size`>  = {
  'MTD-device-name': {
    value: '',
    state: 'default',
    error: '',
  },
  'flash-size': {
    value: '16',
    state: 'valid',
    error: '',
  },
  'initial-offset': {
    value: '0x0',
    state: 'valid',
    error: '',
  },
  'part0-name': {
    value: 'boot',
    state: 'valid',
    error: '',
  },
  'part0-size': {
    value: '256',
    state: 'valid',
    error: '',
  },
  'part1-name': {
    value: 'env',
    state: 'valid',
    error: '',
  },
  'part1-size': {
    value: '64',
    state: 'valid',
    error: '',
  },
  'part2-name': {
    value: 'kernel',
    state: 'valid',
    error: '',
  },
  'part2-size': {
    value: '3072',
    state: 'valid',
    error: '',
  },
  'part3-name': {
    value: 'rootfs',
    state: 'valid',
    error: '',
  },
  'part3-size': {
    value: '10240',
    state: 'valid',
    error: '',
  },
  'part4-name': {
    value: 'rootfs_data',
    state: 'valid',
    error: '',
  },
  'part4-size': {
    value: '2752',
    state: 'valid',
    error: '',
  },
}
