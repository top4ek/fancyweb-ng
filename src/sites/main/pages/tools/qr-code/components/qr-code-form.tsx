import Input from '../../../../../../components/ui/form-elems/input';
import MainButton from '../../../../../../components/ui/buttons/main-button';
import icons from '../../../../../../assets/icons/ui';
import {useState} from 'preact/hooks';

export default function QRCodeForm() {
  const { ShowPassword, HidePassword } = icons;

  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [passInptType, setPassInptType] = useState('password');

  function handleSsidOnInput(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      setSsid(value);
    }
  }

  function handlePasswordOnInput(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const { value } = e.target;
      setPassword(value);
    }
  }

  function handlePassInptIconClick() {
    setPassInptType(passInptType === 'password' ? 'text' : 'password');
  }

  return (
    <form className="flex flex-col gap-y-3 w-full items-center">
      <Input elemName="ssid" type="text" label="SSID" required={true}
        state="default" placeholder="OpenIPC_HotSpot" onInput={handleSsidOnInput} value={ssid} />
      <Input elemName="password" type={passInptType} label="Password" state="default" value={password}
        onInput={handlePasswordOnInput} required={true} Icon={passInptType === 'password' ? ShowPassword : HidePassword}
        iconPlace="right" iconClickHandler={handlePassInptIconClick} />
      <MainButton type="submit" caption="Generate QR Code" />
    </form>
  );
}
