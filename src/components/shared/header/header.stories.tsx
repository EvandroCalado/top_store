import { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

const meta: Meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
