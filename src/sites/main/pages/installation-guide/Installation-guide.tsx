import H1 from '../../../../components/ui/headers/h1';
import InformationBanner from '../../../../components/widgets/information-banner/';
import stageIcons from '../../../../assets/icons/socs-info';
import { InstallationGuideForm } from './components/installation-guide-form';
import { guide, saveFirmware } from './constants';
import { useLocation } from 'preact-iso';
import { socs } from '../supported-hardware/constants';
import { FormDataType } from './components/installation-guide-form/Installation-guide-form';
import { useState } from 'preact/hooks';

const tempSettings = {
  "mac-address": "F2:95:4A:E2:44:08",
  "ip-address": "192.168.1.10",
  "tftp-address": "192.168.1.254",
  "mem-chip": "NOR 8M",
  "firmware-ver": "Lite",
  "net-ifaces": "Camera has only Ethernet interface",
  "sd-card": "Camera does not have an SD card slot"
}

export default function InstallationGuide() {
  const location = useLocation();
  const [ curVendor, curModel ] = location.path.split('/').slice(2);
  const { stage } = socs.filter(({vendor, model}) =>
    vendor.toLowerCase() === curVendor.toLowerCase() &&
    model.toLowerCase() === curModel.toLowerCase()
  )[0];
  const Stage = stageIcons[stage];
  const [ settings, setSettings ] = useState<FormDataType | null>(tempSettings);

  function applyFormData(formData: FormDataType) {
    console.log('Installation form data: ', formData);
    setSettings(formData);
  }

  function formStage() {
    return (
      <>
        <div className="py-4 flex flex-row justify-start items-center gap-x-4">
          <H1 content={`${curVendor} ${curModel}`} />
          <div className="*:w-[44px] *:h-[44px]">
            <Stage />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          <div className="grow basis-1/3 order-1">
            <InformationBanner content={{h: guide.h, p: guide.p}} />
          </div>
          <div className="max-w-96 grow basis-1/3 border rounded p-2 shadow-md order-3 md:order-2">
            <InstallationGuideForm applyFormData={applyFormData}/>
          </div>
          <div className="grow basis-1/3 order-2 md:order-3">
            <InformationBanner content={{h: saveFirmware.h, p: saveFirmware.p}} type="warning" />
          </div>
        </div>
      </>
    );
  }

  function FirmwareSaving({ settings }: { settings: FormDataType}) {
    console.log(settings);
    return (
      <div className="w-full bg-warning-bg border-2 rounded border-warning-border p-4">
        <p className="text-3xl font-medium text-warning-text pb-2">Save the original firmware</p>
        <p className="text-xl font-medium text-warning-text pb-2">Back up your stock firmware, don't skip this part of the installation process!</p>
        <div className="flex flex-col md:flex-row my-4">
          <p className="text-lg text-warning-text w-full md:w-[40%]">
            OpenIPC U-Boot overwrites the original crypto partition making it impossible to revert to the factory firmware unless you have a full flash backup for this particular camera! To create a full firmware backup start a TFTP server and run these commands in bootloader shell.
          </p>
          <div className="bg-wallet-bg w-full md:w-[60%] p-4 rounded-[4px]">
            <div className="w-full overflow-x-auto flex flex-col gap-y-1">
              <p className="text-nowrap text-red"># Enter commands line by line! Do not copy and paste multiple lines at once!</p>
              <p className="text-nowrap text-warning-text">setenv ipaddr {`${settings['ip-address']}`}; setenv serverip 192.168.1.254</p>
              <p className="text-nowrap text-warning-text">mw.b 0x42000000 0xff 0x800000</p>
              <p className="text-nowrap text-warning-text">sf probe 0; sf read 0x42000000 0x0 0x800000</p>
              <p className="text-nowrap text-warning-text">tftpput 0x42000000 0x800000 backup-{`${curModel.toLowerCase()}`}-{`${settings['mem-chip'].replace(' ', '').toLowerCase()}`}.bin</p>
              <p className="text-nowrap text-red"># If there is no tftpput but tftp then run this instead</p>
              <p className="text-nowrap text-warning-text pb-2">tftp 0x42000000 backup-{`${curModel.toLowerCase()}`}-{`${settings['mem-chip'].replace(' ', '').toLowerCase()}`} 0x800000</p>
            </div>
          </div>
        </div>
        <p className="text-lg text-warning-text">
          Please refer to <a className="hover:cursor-pointer text-brand-blue hover:text-btn-blue-hover pt-4 text-right" href="https://github.com/openipc/wiki/blob/master/en/installation.md">Installation instructions</a> in the project's wiki for more information.
        </p>
      </div>
    );
  }

  function FirmwareStage(settings: FormDataType) {
    return (
      <>
        <div className="flex flex-col md:flex-row">
          <div className="grow">
            <div className="pt-4 pb-1 flex flex-row justify-start items-center gap-x-4">
              <H1 content={`Flashing OpenIPC Firmware (${settings['firmware-ver']})`} />
              <div className="*:w-[44px] *:h-[44px]">
                <Stage />
              </div>
            </div>
            <p className="font-bold text-xl">{`on a camera with ${curVendor} ${curModel} SoC and ${settings['mem-chip']} SPI flash chip`}</p>
          </div>
          <div className="flex flex-col justify-start">
            <p className="hover:cursor-pointer text-brand-blue hover:text-btn-blue-hover pt-4 text-right" onClick={() => setSettings(null)}>&larr; Go back to setting form</p>
          </div>
        </div>
        <div className="py-4">
          <InformationBanner content="If you have any problems accessing downloadable files, please feel free to contact us on our [Telegram](https://t.me/OpenIPC) channel." />
        </div>
        <FirmwareSaving {...{settings}} />
      </>
    );
  }
  
  return (
    settings
      ? FirmwareStage(settings) 
      : formStage()
  );

}
