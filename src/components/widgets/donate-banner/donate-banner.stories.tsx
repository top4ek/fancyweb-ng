import { Meta, StoryObj } from '@storybook/preact';
import DonateBanner from './donate-banner';

const meta: Meta<typeof DonateBanner> = {
  component: DonateBanner,
  title: 'Design System/Widgets/Donate Banner',
}

export default meta;

type Story = StoryObj<typeof DonateBanner>;

export const DonateBannerStory: Story = {
  args: {
    size: 'big',
  },
}
