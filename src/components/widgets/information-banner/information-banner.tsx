import {FunctionComponent} from 'preact';
import Paragraph from '../paragraph/paragraph';
import { InformationBannerProps } from './types';

const InformationBanner: FunctionComponent<InformationBannerProps> = ({ content }) => {
  return (
    <div className="border rounded p-4 flex flex-col gap-y-4 bg-stages-bg border-stages-border">
      <Paragraph content={content} />
    </div>
  );
}

export default InformationBanner;
