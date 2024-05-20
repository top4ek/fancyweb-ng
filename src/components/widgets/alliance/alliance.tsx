import AllianceIcons from '../../../assets/icons/alliance';
import H2 from '../../ui/headers/h2/h2';

export default function Alliance() {
  const { OpenIPC, Majestic } = AllianceIcons;

  return (
    <section className="flex flex-col">
      <div>
        <H2 content="Alliance" />
      </div>
      <div className="flex flex-row justify-between *:w-[49%] *:h-[49%]">
        <OpenIPC />
        <Majestic />
      </div>
    </section>
  );
}
