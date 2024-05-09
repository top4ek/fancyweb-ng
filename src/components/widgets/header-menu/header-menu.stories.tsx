import { Meta, StoryObj } from '@storybook/preact';
import HeaderMenu from './header-menu';
import { headerMenuConstants } from './constants';

const meta: Meta<typeof HeaderMenu> = {
  component: HeaderMenu,
  title: 'Design System/Widgets/Header Menu',
}

export default meta;

type Story = StoryObj<typeof HeaderMenu>;

export const HeaderMenuStory: Story = {
  args: {
    list: headerMenuConstants,
  }
};
