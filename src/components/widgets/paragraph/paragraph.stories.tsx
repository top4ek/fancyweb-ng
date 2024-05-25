import { Meta, StoryObj } from '@storybook/preact';
import Paragraph from './paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: 'Design System/Widgets/Paragraph',
}

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const ParagraphSimple = {
  args: {
    content: 'If you stubmle upon an bug, please file a bug report in the appropriate repository on GitHub.',
  }
};

export const ParagraphComplex = {
  args: {
    content: {
      h: 'Report issues',
      p: 'If you stubmle upon an bug, please file a bug report in the [appropriate repository on GitHub](https://github.com/OpenIPC/).',
    },
  }
};

export const ParagraphDl = {
  args: {
    content: {
      h: 'Report issues',
      p: 'If you stubmle upon an bug, please file a bug report in the [appropriate repository on GitHub](https://github.com/OpenIPC/).',
      dl: true,
    },
  }
}
