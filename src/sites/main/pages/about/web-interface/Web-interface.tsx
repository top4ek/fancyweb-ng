import H1 from '../../../../../components/ui/headers/h1';
import { webInerfaceContants } from './constants';
import pic1 from '../../../../../assets/pics/web-interface/1.jpg';
import pic2 from '../../../../../assets/pics/web-interface/2.jpg';
import pic3 from '../../../../../assets/pics/web-interface/3.jpg';
import pic4 from '../../../../../assets/pics/web-interface/4.jpg';
import pic5 from '../../../../../assets/pics/web-interface/5.jpg';
import pic6 from '../../../../../assets/pics/web-interface/6.jpg';
import pic7 from '../../../../../assets/pics/web-interface/7.jpg';
import pic8 from '../../../../../assets/pics/web-interface/8.jpg';
import pic9 from '../../../../../assets/pics/web-interface/9.jpg';
import pic10 from '../../../../../assets/pics/web-interface/10.jpg';
import pic11 from '../../../../../assets/pics/web-interface/11.jpg';
import pic12 from '../../../../../assets/pics/web-interface/12.jpg';

export default function WebInterface() {
  const pics = [ pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12 ];
  return (
    <>
      <div className="py-4">
        <H1 content={webInerfaceContants.h1}/>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
        {
          pics.map(pic => <img src={pic}></img>)
        }
      </div>
    </>
  );
}
