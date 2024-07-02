import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
import Modal from '../../components/Modal/Modal';

const meta = {
  component: Modal,
  render: (args) => <Modal {...args} />,
  title: 'Modal',
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    content: 'Success',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const Error: Story = {
  args: {
    type: 'error',
    title: 'Error',
    content: 'Error',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const Info: Story = {
  args: {
    type: 'info',
    title: 'Info',
    content: 'Info',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    content: 'Warning',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const Loading: Story = {
  args: {
    type: 'loading',
    title: 'Loading',
    content: 'Loading',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const Launch: Story = {
  args: {
    type: 'launch',
    title: 'Launch',
    content: 'Launch',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const Wait: Story = {
  args: {
    type: 'wait',
    title: 'Wait',
    content: 'Wait',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
export const End: Story = {
  args: {
    type: 'end',
    title: 'End',
    content: 'End',
    height: '150px',
    width: '300px',
    position: 'center',
    delay: 5000,
    buttonPosition: 'upright',
  },
};
