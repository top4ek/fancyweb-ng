import H1 from '../../../../../components/ui/headers/h1';
import Input from './components/input';

export default function FirmwarePartitionCalculator() {
  return (
    <>
      <div className="py-4">
        <H1 content="Firmware Partition Calculator" />
      </div>
      <div className="flex flex-col gap-y-2">
        <Input elemName="mtd-device-name" label="MTD device name" borderWidth="1px" borderColor="default" />
        <Input elemName="partition-1-name" label="Partition 1 name" borderWidth="3px" borderColor="partition1" />
        <Input elemName="partition-1-name" label="Partition 2 name" borderWidth="3px" borderColor="partition2" />
        <Input elemName="partition-1-name" label="Partition 3 name" borderWidth="3px" borderColor="partition3" />
        <Input elemName="partition-1-name" label="Partition 4 name" borderWidth="3px" borderColor="partition4" />
        <Input elemName="partition-1-name" label="Partition 5 name" borderWidth="3px" borderColor="partition5" />
        <Input elemName="partition-1-name" label="Partition 6 name" borderWidth="3px" borderColor="partition6" />
        <Input elemName="partition-1-name" label="Partition 7 name" borderWidth="3px" borderColor="partition7" />
        <Input elemName="partition-1-name" label="Partition 8 name" borderWidth="3px" borderColor="partition8" />
      </div>
    </>
  );
}
