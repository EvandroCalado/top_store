import { Meta, StoryObj } from '@storybook/react';

import { Footer } from '.';

const meta: Meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
