import Input from '../../../../../../components/ui/form-elems/input';
import Select from '../../../../../../components/ui/form-elems/select/Select';
import icons from '../../../../../../assets/icons/ui';
import MainButton from '../../../../../../components/ui/buttons/main-button';
import { generateRandomMacAddress } from '../../../../../../utils';
import useForm from '../../../../../../utils/hooks/useForm';
import { installationGuideFormSchema } from './form-schema';
import { installationGuideFormValidationSchema } from './form-validation-schema';
import { memChipOpts, firmwareVersOpts, netIfacesOpts, sdCardSlotsOpts } from '../../constants';

const { Atom } = icons;

export type FormDataType = Record<keyof typeof installationGuideFormSchema, string>; 

export default function InstallationGuideForm({ applyFormData }: { applyFormData: (formData: FormDataType) => void }) {
  const { handleOnChange, handelFormButtonClick, formElemsState, formState } = useForm(installationGuideFormSchema, installationGuideFormValidationSchema);

  function handleGenMacAddrIconClick(input: HTMLInputElement, _: Event) {
    input.value = generateRandomMacAddress();
    input.dispatchEvent(new Event('input'));
  }

  function handleFormSubmit(e: Event) {
    if (e.target instanceof HTMLFormElement) {
      e.preventDefault();
      handelFormButtonClick();
      if (formState === 'valid') {
        const formData: FormDataType = Object.entries(formElemsState).reduce((acc, [ name, { value }]) => ({...acc, [name]: value }), {});
        applyFormData(formData);
      }
    }
  }

  return (
    <form className="flex flex-col gap-y-3 max-w-96 items-center" onSubmit={handleFormSubmit}>
      <Input elemName="mac-address" type="text" label="Camera MAC address" required={true}
        state={formElemsState['mac-address'].state} placeholder="ff:ff:ff:ff:ff:ff" Icon={Atom} value={formElemsState['mac-address'].value}
        onInput={handleOnChange} iconClickHandler={handleGenMacAddrIconClick} errorText={formElemsState['mac-address'].error}
      />
      <Input elemName="ip-address" type="text" label="Camera IP address" required={true}
        state={formElemsState['ip-address'].state} placeholder="192.168.1.10" value={formElemsState['ip-address'].value}
        onInput={handleOnChange} errorText={formElemsState['ip-address'].error}
      />
      <Input elemName="tftp-address" type="text" label="TFTP server IP address" required={true}
        state={formElemsState['tftp-address'].state} placeholder="192.168.1.254" value={formElemsState['tftp-address'].value}
        onInput={handleOnChange} errorText={formElemsState['tftp-address'].error}

      />
      <Select elemName="mem-chip" label="Type and size of flash memory chip" required={true}
        state={formElemsState['mem-chip'].state} onInput={handleOnChange}
        description="If you are not sure, select NOR 8M" options={memChipOpts}
      />
      <Select elemName="firmware-ver" label="Firmware version" options={firmwareVersOpts}
        state={formElemsState['firmware-ver'].state} onInput={handleOnChange}
      />
      <Select elemName="net-ifaces" label="Network interface" options={netIfacesOpts}
        state={formElemsState['net-ifaces'].state} onInput={handleOnChange}
      />
      <Select elemName="sd-card" label="SD card slot" options={sdCardSlotsOpts}
        state={formElemsState['sd-card'].state} onInput={handleOnChange}
      />
      <div className="pt-4 pb-2">
        <MainButton type='submit' caption="Generate Installation Guide" size='m' /> 
      </div>
    </form>
  );
}
