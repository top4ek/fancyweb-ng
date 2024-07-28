export const memChipOpts = [{ value: 'NOR 8M' }, { value: 'NOR 16M' }, { value: 'NOR 32M' }, { value: 'NAND' }];
export const firmwareVersOpts = [{ value: 'Lite' }, { value: 'Ultimate', disabled: true }, { value: 'FPV' }, { value: 'Rubyfpv' }, { value: 'VENC' }];
export const netIfacesOpts = [
  { value: 'Camera has only Ethernet interface' },
  { value: 'Camera has only wireless interface' },
  { value: 'Camera has both Ethernet and wireless interfaces' }
];
export const sdCardSlotsOpts = [
  { value: 'Camera does not have an SD card slot' },
  { value: 'Camera has an SD card slot' },
];
