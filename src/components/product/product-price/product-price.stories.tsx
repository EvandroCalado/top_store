import { Meta, StoryObj } from '@storybook/react';

import { ProductPrice } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductPrice',
  component: ProductPrice,
  args: {
    value: 59.99,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductPrice>;

export const Default: Story = {};
