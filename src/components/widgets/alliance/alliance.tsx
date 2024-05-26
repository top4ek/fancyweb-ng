import AllianceIcons from '../../../assets/icons/alliance';
import H2 from '../../ui/headers/h2/h2';

export default function Alliance() {
  const { OpenIPC, Majestic } = AllianceIcons;

  return (
    <div className="flex flex-col">
      <div>
        <H2 content="Alliance" />
      </div>
      <div className="flex flex-row justify-between *:w-[96%] *:h-[96%]">
        <OpenIPC />
        <Majestic />
      </div>
    </div>
  );
}
