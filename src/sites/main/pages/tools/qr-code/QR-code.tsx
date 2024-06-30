import H1 from '../../../../../components/ui/headers/h1';
import InformationBanner from '../../../../../components/widgets/information-banner';
import type { InformationBannerProps } from '../../../../../components/widgets/information-banner/information-type';
import Paragraph from '../../../../../components/widgets/paragraph/paragraph';

export default function QRCode() {
  const announcement: InformationBannerProps['content'] = {
    h: 'We do not use any third party services',
    p: 'We do not share your data with anyone. The code is generated locally. Information about the entered data is not saved anywhere. You can be sure that your data is safe. If you have any doubts, please do not use this service.',
  };

  return (
    <>
      <div className="py-4">
        <H1 content="Wireless Network QR Code Generator" />
      </div>
      <Paragraph content=" Generate a QR code with credentials for accessing your wireless network." />
      <InformationBanner content={announcement} type="information" />
    </>
  );
}
