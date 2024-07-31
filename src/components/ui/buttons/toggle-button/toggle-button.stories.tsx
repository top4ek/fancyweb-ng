import type { Meta, StoryObj } from '@storybook/preact';
import ToggleButton from './Toggle-button';
import icons from '../../../../assets/icons/ui';

const { Play, Pause, Refresh } = icons;

const meta = {
  component: ToggleButton,
  title: 'Design System/UI/Toggle Button',
  argTypes: {
    size: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'inline-radio' },
    },
    Icon: {
      options: ['Play', 'Pause', 'Refresh'],
      mapping: {
        'Play': Play,
        'Pause': Pause,
        'Refresh': Refresh,
      },
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const ToggleButtonStory: Story = {
  args: {
    size: 'xs',
    initChecked: false,
    disabled: false,
    Icon: Play,
  },
};
