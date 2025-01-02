import sampleData from '@/db/sample-data';
import { Meta, StoryObj } from '@storybook/react';

import { ProductCard } from '.';

const product = sampleData.products[0];

const meta: Meta = {
  title: 'Components/Product/ProductCard',
  component: ProductCard,
  args: {
    product,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {};
