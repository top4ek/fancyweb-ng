import { Meta, StoryObj } from '@storybook/preact';
import Wallet from './wallet';

const meta: Meta<typeof Wallet> = {
  component: Wallet,
  title: 'Design System/Widgets/Wallet',
}

export default meta;

type Story = StoryObj<typeof Wallet>;

export const WalletStory: Story = {
  args: {
    title: 'Bitcoin - BTC',
    address: '1Gu9xVdXKs5T9TTe2zJn4oSiJs4Dz9Vi6J',
    icon: 'Btc',
  },
}
