import { Meta, StoryObj } from '@storybook/react';

import { Logo } from '.';

const meta: Meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
