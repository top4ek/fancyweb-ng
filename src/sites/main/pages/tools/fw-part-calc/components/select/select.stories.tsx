import type { Meta, StoryObj } from '@storybook/preact';
import Select from './Select';

const meta = {
  component: Select,
  title: 'Design System/UI/Partition Calc Select',
  argTypes: {
    state: {
      options: ['default', 'valid', 'error', 'disabled'],
      control: 'select',
    },
    errorText: {
      options: ['', 'Only number allowed', 'Must not be empty'],
      control: 'select',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const PartialSelectStory: Story = {
  args: {
    label: 'MTD Device Name',
    options: ['', 'hi_sfc', 'hinand', 'jz_sfc', 'nor-flash', 'NOR_FLASH', 'sfc', 'spi0.0', 'spi_flash', 'xm_sfc'],
  },
}
