import { Meta, StoryObj } from '@storybook/preact';
import Team from './team';
import { IPCCore } from '../../../sites/main/constants/team';

const meta: Meta<typeof Team> = {
  component: Team,
  title: 'Design System/Widgets/Team',
}

export default meta
type Story = StoryObj<typeof Team>;

export const TeamStory: Story = {
  args: {
    members: IPCCore,
  }
}
