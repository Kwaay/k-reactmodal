/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import React, { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { CheckCircle, Info, Warning, XCircle } from '@phosphor-icons/react';

import styles from './Modal.module.css';

// eslint-disable-next-line import/no-unresolved
import { ModalProps } from './Modal.types';

function Modal({
  type,
  title,
  content,
  width,
  height,
  position,
  delay,
  buttonPosition,
}: ModalProps): ReactElement {
  const cx = classNames.bind(styles);
  const positionClassnames = cx([position], {
    modal: true,
    topleft: position === 'topleft',
    topright: position === 'topright',
    bottomleft: position === 'bottomleft',
    bottomright: position === 'bottomright',
    center: position === 'center',
  });
  const closeClassnames = cx([buttonPosition], {
    close: true,
    upleft: buttonPosition === 'upleft',
    upright: buttonPosition === 'upright',
    downleft: buttonPosition === 'downleft',
    downright: buttonPosition === 'downright',
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(true);
    }, delay);
  }, [delay]);
  return isOpen ? (
    <div
      className={positionClassnames}
      style={{ maxHeight: height, maxWidth: width }}
    >
      <div className={closeClassnames} onClick={() => setIsOpen(false)}>
        <XCircle
          color="#fff"
          weight="fill"
          size={32}
          className={styles['icon-close']}
        />
      </div>
      <div>
        {type === 'success' && (
          <CheckCircle
            color="#1fa647"
            weight="fill"
            size={32}
            className={styles['icon-type']}
          />
        )}
        {type === 'error' && (
          <XCircle
            color="red"
            weight="fill"
            size={32}
            className={styles['icon-type']}
          />
        )}
        {type === 'info' && (
          <Info
            color="#eec93c"
            weight="fill"
            size={32}
            className={styles['icon-type']}
          />
        )}
        {type === 'warning' && (
          <Warning
            color="#fe8d59"
            weight="fill"
            size={32}
            className={styles['icon-type']}
          />
        )}
        {type === 'loading' && <span className={styles.loader}></span>}
        {type === 'launch' && <p className={styles['icon-special']}>🚀</p>}
        {type === 'wait' && <p className={styles['icon-special']}>⏱️</p>}
        {type === 'end' && <p className={styles['icon-special']}>🎉</p>}
      </div>
      <div className={styles['modal-content']}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Modal;
