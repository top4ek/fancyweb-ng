import type { Meta, StoryObj } from '@storybook/preact';
import IconButton from './icon-button';
import UIIcons from '../../../../assets/icons/ui';

const { Burger: BurgerIcon } = UIIcons;

const meta = {
  component: IconButton,
  subcomponents: { BurgerIcon },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Burger: Story = {};
