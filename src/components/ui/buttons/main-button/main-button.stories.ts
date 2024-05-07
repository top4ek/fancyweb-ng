import type { Meta, StoryObj } from '@storybook/preact';
import Button from './main-button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'button',
    caption: 'Наименование кнопки',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    type: 'button',
    title: 'Наименование кнопки',
    disabled: true,
  },
};
