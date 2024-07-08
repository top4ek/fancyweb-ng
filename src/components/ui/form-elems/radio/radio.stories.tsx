import type { Meta, StoryObj } from '@storybook/preact';
import Radio from './Radio';

const meta = {
  component: Radio,
  title: 'Design System/UI/Radio',
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RadioStory: Story = {
  args: {
    name: 'qr-code-generator',
    defaultChecked: 2,
    captions: ['vCard', 'MeCard', 'OpenIPC'],
  },
}
