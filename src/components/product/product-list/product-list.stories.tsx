import sampleData from '@/db/sample-data';
import { Meta, StoryObj } from '@storybook/react';

import { ProductList } from '.';

const meta: Meta = {
  title: 'Components/Product/ProductList',
  component: ProductList,
  args: {
    data: sampleData.products,
    title: 'Newest Arrivals',
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
