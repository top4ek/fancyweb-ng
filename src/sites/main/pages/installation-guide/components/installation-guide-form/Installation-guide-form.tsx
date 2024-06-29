import Input from '../../../../../../components/ui/form-elems/input';
import Select from '../../../../../../components/ui/form-elems/select/Select';
import icons from '../../../../../../assets/icons/ui';
import MainButton from '../../../../../../components/ui/buttons/main-button';
import {useState} from 'preact/hooks';
import { generateRandomMacAddress } from '../../../../../../utils';

const { Atom } = icons;

export default function  InstallationGuideForm() {
  const [macAddrValue, setMacAddrValue] = useState('');
  const [ipAddrValue, setIpAddrValue] = useState('192.168.1.10');
  const [tftpAddrValue, setTftpAddrValue] = useState('192.168.1.254');

  const memChipOpts = [{ value: 'NOR 8M' }, { value: 'NOR 16M' }, { value: 'NOR 32M' }, { value: 'NAND' }];
  const firmwareVersOpts = [{ value: 'Lite' }, { value: 'Ultimate', disabled: true }, { value: 'FPV' }, { value: 'Rubyfpv' }, { value: 'VENC' }];
  const netIfacesOpts = [
    { value: 'Camera has only Ethernet interface' },
    { value: 'Camera has only wireless interface' },
    { value: 'Camera has both Ethernet and wireless interfaces' }
  ];
  const sdCardSlotsOpts = [
    { value: 'Camera does not have an SD card slot' },
    { value: 'Camera has an SD card slot' },
  ];

  const handleMacOnInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      setMacAddrValue(value);
    }
  }

  const handleGenMacAddrIconClick = () => {
    setMacAddrValue(generateRandomMacAddress());
  }

  const handleIpOnInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      setIpAddrValue(value);
    }
  }

  const handleTftpOnInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      setTftpAddrValue(value);
    }
  }

  return (
    <form className="flex flex-col gap-y-3 max-w-96 items-center">
      <Input elemName="mac-address" type="text" label="Camera MAC address" required={true}
        state="default" placeholder="ff:ff:ff:ff:ff:ff" Icon={Atom} value={macAddrValue}
        onInput={handleMacOnInput} iconClickHandler={handleGenMacAddrIconClick}
      />
      <Input elemName="ip-address" type="text" label="Camera IP address" required={true}
        state="default" placeholder="192.168.1.10" value={ipAddrValue}
        onInput={handleIpOnInput}
      />
      <Input elemName="tftp-address" type="text" label="TFTP server IP address" required={true}
        state="default" placeholder="192.168.1.254" value={tftpAddrValue}
        onInput={handleTftpOnInput}
      />
      <Select elemName="mem-chip" label="Type and size of flash memory chip" required={true}
        description="If you are not sure, select NOR 8M" options={memChipOpts}
      />
      <Select elemName="firmware-ver" label="Firmware version" options={firmwareVersOpts} />
      <Select elemName="net-ifaces" label="Network interface" options={netIfacesOpts} />
      <Select elemName="sd-card" label="SD card slot" options={sdCardSlotsOpts} />
      <div className="pt-4 pb-2">
        <MainButton type='submit' caption="Generate Installation Guide" /> 
      </div>
    </form>
  );
}
