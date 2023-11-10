import React from 'react';
import styles from './Modal.module.css';
import classNames from 'classnames/bind';

const Modal = ({ isOpen, closeModal }) => {
  const cx = classNames.bind(styles);

  return (
    <div>
      {isOpen && (
        <div className={cx('modal-backdrop')} onClick={closeModal}>
          <div className={cx('box')}>
            <div className={cx('button')} onClick={closeModal}></div>
            {/* 모달 내용 추가 */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
