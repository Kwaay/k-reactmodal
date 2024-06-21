import type { StoryObj } from '@storybook/react';
import React from 'react';
import Modal from '../../components/Modal/Modal';
declare const meta: {
    component: typeof Modal;
    render: (args: import("../../components/Modal/Modal.types").ModalProps) => React.JSX.Element;
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Success: Story;
export declare const Error: Story;
export declare const Info: Story;
export declare const Warning: Story;
export declare const Loading: Story;
export declare const Launch: Story;
export declare const Wait: Story;
export declare const End: Story;
