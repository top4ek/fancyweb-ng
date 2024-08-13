import H1 from '../../../../../components/ui/headers/h1';
import Input from './components/input';
import Output from './components/output';
import Select from './components/select';
import MainButton from '../../../../../components/ui/buttons/main-button';
import useCalc from './hooks/useCalc';
import { FwCalcFormSchema } from './calcFormSchema';
import { FwCalcFormValidationSchema } from './calcFormValidationSchema';

export default function FirmwarePartitionCalculator() {
  const { handleOnChange, formElemsState } = useCalc(FwCalcFormSchema, FwCalcFormValidationSchema);
  return (
    <>
      <div className="py-4">
        <H1 content="Firmware Partition Calculator" />
      </div>
      <div className="flex flex-row gap-x-1 mb-6">
        <MainButton size='s' caption="Lite" />
        <MainButton size='s' caption="Ultimate" />
        <div className="ml-auto">
          <MainButton size='s' caption="Recalculate" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
          <div className="md:w-[calc(20%-6px)]">
            <Select label='MTD device name' elemName='MTD-device-name' options={['', 'hi_sfc', 'hinand', 'jz_sfc', 'nor-flash', 'NOR_FLASH', 'sfc', 'spi0.0', 'spi_flash', 'xm_sfc']} required={true} onChange={handleOnChange} state={formElemsState['MTD-device-name'].state} errorText={formElemsState['MTD-device-name'].error} />
          </div>
          <div className="md:w-[calc(20%-6px)]">
            <Select label='Flash size, MB' elemName='flash-size' options={['', 'NOR 4', 'NOR 8', 'NOR 16', 'NOR 32', 'NAND 128', 'NAND 256', 'NAND 512']} required={true} onChange={handleOnChange} state={formElemsState['flash-size'].state} errorText={formElemsState['flash-size'].error} />
          </div>
          <div className="md:w-[calc(20%-6px)]">
            <Input elemName='initial-offset' label='Initial offset, dec or hex' onInput={handleOnChange} borderWidth='1px' borderColor='default' value={formElemsState['initial-offset'].value} state={formElemsState['initial-offset'].state} errorText={formElemsState['initial-offset'].error} dir="rtl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part0-name' label='Partition 0 name' borderWidth='4px' borderColor='partition0' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part0-size' label='Partition 0 size, KB' borderWidth='1px' borderColor='default' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part1-name' label='Partition 1 name' borderWidth='4px' borderColor='partition1' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part1-size' label='Partition 1 size, KB' borderWidth='1px' borderColor='default' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part2-name' label='Partition 2 name' borderWidth='4px' borderColor='partition2' value="" />
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part2-size' label='Partition 2 size, KB' borderWidth='1px' borderColor='default' value="" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part3-name' label='Partition 3 name' borderWidth='4px' borderColor='partition3' value="" />
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part3-size' label='Partition 3 size, KB' borderWidth='1px' borderColor='default' value="" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part4-name' label='Partition 4 name' borderWidth='4px' borderColor='partition4' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part4-size' label='Partition 4 size, KB' borderWidth='1px' borderColor='default' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part5-name' label='Partition 5 name' borderWidth='4px' borderColor='partition5' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part5-size' label='Partition 5 size, KB' borderWidth='1px' borderColor='default' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part6-name' label='Partition 6 name' borderWidth='4px' borderColor='partition6' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part6-size' label='Partition 6 size, KB' borderWidth='1px' borderColor='default' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 mt-4 md:mt-0 md:flex-row md:gap-x-2 md:items-center">
          <div className="md:w-[20%]">
            <Input elemName='part7-name' label='Partition 7 name' borderWidth='4px' borderColor='partition7' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Input elemName='part7-size' label='Partition 7 size, KB' borderWidth='1px' borderColor='default' value=""/>
          </div>
          <div className="md:w-[20%]">
            <Output label="Start address" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="Hex size, bytes" data="0x0" />
          </div>
          <div className="md:w-[20%]">
            <Output label="End address" data="0x0" />
          </div>
        </div>
      </div>
    </>
  );
}
