import H1 from '../../../../components/ui/headers/h1';
import InformationBanner from '../../../../components/widgets/information-banner/';
import stageIcons from '../../../../assets/icons/socs-info';
import { InstallationGuideForm } from './components/installation-guide-form';
import { guide, saveFirmware } from './constants';
import { useLocation } from 'preact-iso';
import { socs } from '../supported-hardware/constants';

export default function InstallationGuide() {
  const location = useLocation();
  const [curVendor, curModel ] = location.path.split('/').slice(2);
  const { stage } = socs.filter(({vendor, model}) =>
    vendor.toLowerCase() === curVendor.toLowerCase() &&
    model.toLowerCase() === curModel.toLowerCase()
  )[0];
  const Stage = stageIcons[stage];

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
          <InstallationGuideForm />
        </div>
        <div className="grow basis-1/3 order-2 md:order-3">
          <InformationBanner content={{h: saveFirmware.h, p: saveFirmware.p}} type="warning" />
        </div>
      </div>
    </>
  );
}
