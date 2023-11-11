import React, { useState } from 'react';
import s from './Modal.module.scss';

interface User {
  address: Address;
  company: Company;
}

interface Address {
  street: string;
  city: string;
  suite: string;
}

interface Company {
  name: string;
}

interface Props {
  user: User;
}

const Modal: React.FC<Props> = (props) => {
  console.log('props:', props);
  const { address, company } = props.user;
  const [isModalOpen, setModalOpen] = useState(false);

  const modalHandler = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen || (
        <div className={s.modal} onClick={() => modalHandler()}>
          <div className={s.modal_window}>
            <div>
              <p className={s.title}>Company:</p> {company.name}
            </div>
            <div>
              <p className={s.title}>Address:</p> {address.city},{' '}
              {address.street}, {address.suite}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
