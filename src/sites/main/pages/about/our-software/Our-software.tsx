import H1 from '../../../../../components/ui/headers/h1';
import H2 from '../../../../../components/ui/headers/h2';
import InformationBanner from '../../../../../components/widgets/information-banner';
import Paragraph from '../../../../../components/widgets/paragraph';
import { OurSoftwareConstants } from './constants';

export default function OurSoftware() {
  return (
    <>
      <div className="py-4">
        <H1 content={OurSoftwareConstants.h1}/>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-8">
        <div className="flex flex-col gap-y-2 md:basis-2/4">
          <H2 content={OurSoftwareConstants.h2_1} />
          <div>
            <Paragraph content={OurSoftwareConstants.p1} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p2} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p3} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p4} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p5} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p6} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p7} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p8} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p9} />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 md:basis-2/4">
          <H2 content={OurSoftwareConstants.h2_2} />
          <div>
            <InformationBanner content={OurSoftwareConstants.inforBannerText} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p10} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p11} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p12} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p13} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p14} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p15} />
          </div>
          <div>
            <Paragraph content={OurSoftwareConstants.p16} />
          </div>
        </div>
      </div>
    </>
  );
}
