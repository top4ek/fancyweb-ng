import type { Meta, StoryObj } from '@storybook/preact';
import BurgerBtn from './burger';

const meta = {
  component: BurgerBtn,
} satisfies Meta<typeof BurgerBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Burger: Story = {};
