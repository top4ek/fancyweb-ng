import { FunctionComponent } from 'preact';
import Input from '../../ui/form-elems/input';
import icons from '../../../assets/icons/ui';
import {useState} from 'preact/hooks';
import { generateRandomMacAddress } from '../../../utils';

const { Atom } = icons;

const InstallationGuideForm:FunctionComponent = () => {
  const [macAddrValue, setMacAddrValue] = useState('');
  const [ipAddrValue, setIpAddrValue] = useState('192.168.1.10');
  const [tftpAddrValue, setTftpAddrValue] = useState('192.168.1.254');

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
    <form>
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
    </form>
  );
}

export default InstallationGuideForm;
