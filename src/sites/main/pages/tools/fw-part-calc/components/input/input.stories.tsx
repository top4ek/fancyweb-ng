import type { Meta, StoryObj } from '@storybook/preact';
import Input from './Input';

const meta = {
  component: Input,
  title: 'Design System/UI/Partition Calc Input',
  argTypes: {
    label: {
      type: 'select',
      options: ['MTD device name', 'Partition 1 name'],
    },
    borderWidth: {
      type: 'select',
      options: ['1px', '3px'],
    },
    borderColor: {
      type: 'select',
      options: [
        'default',
        'partition1',
        'partition2',
        'partition3',
        'partition4',
        'partition5',
        'partition6',
        'partition7',
        'partition8',
      ],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const PartCalcInputStory: Story = {
  args: {
    elemName: 'mtd-dev-name',
    label: 'MTD device name',
    borderWidth: '3px',
    borderColor: "partition2",
  },
}
