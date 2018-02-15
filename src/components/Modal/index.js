import * as ReactModal from 'react-modal';
import React from 'react';
import classNames from 'classnames';
import closeIcon from './close_x.svg';
import backIcon from './back_x.svg';
import styles from './style.less';

export default function Modal({ isOpen,
    onAfterOpen,
    onRequestClose,
    closeTimeoutMS,
    contentLabel,
    children,
    fullscreen,
    backButton,
    closeButton,
}) {
    ReactModal.setAppElement(document.body);
    const style = {
        overlay: {
            transitionDuration: '300ms',
        },
        content: {
            width: fullscreen ? '100%' : '640px',
            height: fullscreen ? '100%' : 'auto',
        },
    };
    const modalProps = {
        isOpen,
        onAfterOpen,
        onRequestClose,
        closeTimeoutMS,
        style,
        contentLabel,
        className: styles.content,
        overlayClassName: styles.overlay
    };
    return (
        <ReactModal {...modalProps}>
            {backButton &&
                <button className={styles.close} onClick={onRequestClose}>
                    <img src={backIcon} alt="Close Modal" /> Go Back
                </button>
            }
            {closeButton &&
                <button className={classNames(styles.close, styles.right)} onClick={onRequestClose}>
                    <img src={closeIcon} alt="Close Modal" />
                </button>
            }
            {children}
        </ReactModal>
    );
}
