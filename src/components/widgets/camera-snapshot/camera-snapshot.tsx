import { CameraSnapshotProps } from './types';
import { useEffect, useState } from 'preact/hooks';
import UIIcons from '../../../assets/icons/ui';
import snapshot from '../../../assets/pics/snapshot.jpg';
import camBg from '../../../assets/pics/snapshot.jpg';

export default function CameraSnapshot(props: CameraSnapshotProps) {
  const { soc, date, firmware, uptime, socTemp, resolution, size } = props;
  const { CameraPreloader } = UIIcons;

  if (uptime <= 0) {
    throw new Error('Uptime days number must be greate or equal to 1');
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  })

  const days = uptime === 0 ? 'day' : 'days';
  return (
    <div className="border-wallet-border border rounded-md">
      { loading
        ? <div className={`min-w-40 aspect-[16/9] relative after:absolute after:inset-0 after:content-[''] after:bg-[url('/src/assets/icons/ui/camera-preview-background.svg')] after:bg-repeat after:bg-[length:20px_20px] after:opacity-25`}>
            <div className="flex flex-row justify-center items-center absolute inset-0 z-10 *:w-12 *:h-12">
              <CameraPreloader />
            </div>
          </div>
        : <div className="min-w-40 aspect-[16/9]">
            <img src={snapshot} className="rounded-t"></img>
          </div>
      }
      <div className="p-2 pt-4">
        <div className="flex flex-row flex-nowrap justify-between gap-x-4">
          <div className="max-w-[48%] relative hover:after:content-[attr(data-descr)] hover:after:absolute hover:after:-top-8 hover:after:left-2 hover:after:font-bold hover:after:text-nowrap hover:after:border hover:after:p-1 hover:after:rounded hover:after:bg-white hover:after:text-xs" data-descr={soc}>
            <p className="font-bold text-sm w-full text-nowrap truncate">{soc}</p>
          </div>
          <div className="max-w-[48%] relative hover:after:content-[attr(data-descr)] hover:after:absolute hover:after:-top-8 hover:after:right-2 hover:after:text-nowrap hover:after:border hover:after:p-1 hover:after:rounded hover:after:bg-white hover:after:text-xs" data-descr={date}>
            <p className="text-sm w-full text-nowrap truncate">{date}</p>
          </div>
        </div>
        <p className="text-brand-blue text-xs">{firmware}</p>
        <div className="flex flex-row flex-nowrap justify-start gap-x-1 py-2 text-nowrap relative hover:after:content-[attr(data-descr)] hover:after:text-xs hover:after:absolute hover:after:-top-2 hover:after:right-2 hover:after:text-nowrap hover:after:border hover:after:p-1 hover:after:rounded hover:after:bg-white" {...(socTemp && {'data-descr': `SoC temperature: ${socTemp} °C`})}>
          <p className="text-sm">{`Uptime: ${uptime} ${days}${socTemp ? ' ,' : ''}`}</p>
          {socTemp && <p className="text-sm truncate">SoC temperature: {socTemp} °C</p>}
        </div>
        <p className="text-sm">{resolution}, {size} bytes</p>
      </div>
    </div>
  );
}
