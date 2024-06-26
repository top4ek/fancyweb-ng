import type { Meta, StoryObj } from '@storybook/preact';
import Select from './Select';

const meta = {
  component: Select,
  title: 'Design System/UI/Select',
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SelectStory: Story = {
  args: {
    elemName: 'memChip',
    label: 'Type and size of flash memory chip',
    options: [{
      value: 'NOR 8M',
      disabled: false,
    },
    {
      value: 'NOR 16M',
      disabled: true,
    },
    {
      value: 'NOR 32M',
    },
    {
      value: 'NAND'
    }],
    required: true,
    description: 'If you\'re not sure, select NOR 8M',
  },
}
