import { CameraSnapshotProps } from './types';
import { useEffect, useState } from 'preact/hooks';
import UIIcons from '../../../assets/icons/ui';
import snapshot from '../../../assets/pics/snapshot.jpg';

export default function CameraSnapshot(props: CameraSnapshotProps) {
  const { soc, date, firmware, uptime, socTemp, resolution, size } = props;
  const { CameraPreloader } = UIIcons;

  if (uptime <= 0) {
    throw new Error('Uptime days number must be greate or equal to 1');
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  })

  const days = uptime === 0 ? 'day' : 'days';
  
  return (
    <div className="border-wallet-border border rounded-md">
      { loading
        ? <div className="min-w-80 aspect-[16/9] bg-[length:20px_20px] opacity-25 *:w-[48px] *:h-[48px] flex flex-col justify-center items-center" style="background-image: url('/src/assets/icons/ui/camera-preview-background.svg');">
        <CameraPreloader />
        </div>
        : <div className="min-w-80 aspect-[16/9]">
          <img src={snapshot} className="rounded-t"></img>
        </div>
      }
      <div className="p-2 pt-4">
        <div className="flex flex-row flex-nowrap justify-between">
          <p className="font-bold text-sm">{soc}</p>
          <p className="text-sm">{date}</p>
        </div>
        <p className="text-brand-blue text-xs">{firmware}</p>
        <div className="flex flex-row flex-nowrap justify-start gap-x-1 py-2">
          <p className="text-sm">{`Uptime: ${uptime} ${days}${socTemp ? ' ,' : ''}`}</p>
          {socTemp && <p className="text-sm">SoC temperature: {socTemp} °C</p>}
        </div>
        <p className="text-sm">{resolution}, {size} bytes</p>
      </div>
    </div>
  );
}
