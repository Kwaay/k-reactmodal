/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';
import './Modal.module.css';
import { ModalProps } from './Modal.types.ts';

function Modal({}: ModalProps): ReactElement {
  return (
    <div>
      <p>test</p>
    </div>
  );
}

export default Modal;
