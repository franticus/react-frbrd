import React from 'react';
import s from './Modal.module.scss';
import { ModalProps } from '../../types/modal';

const Modal: React.FC<ModalProps> = (props) => {
  const { address, company } = props.user;
  const { onClose } = props;

  return (
    <div className={s.modal} onClick={() => onClose()}>
      <div className={s.modal_window}>
        <div>
          <p className={s.title}>Company:</p> {company.name}
        </div>
        <div>
          <p className={s.title}>Address:</p> {address.city}, {address.street},{' '}
          {address.suite}
        </div>
      </div>
      <div className={s.modal_window}>
        <div>
          <p className={s.title}>Company:</p> {company.name}
        </div>
        <div>
          <p className={s.title}>Address:</p> {address.city}, {address.street},{' '}
          {address.suite}
        </div>
      </div>
    </div>
  );
};

export default Modal;
