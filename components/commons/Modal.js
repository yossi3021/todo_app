import styles from "../../styles/components/commons/Modal.module.css"

const Modal = (props) => {
    return (
        <div className={`${styles.modal} ${props.className}`}>
            <div className={styles.modal__inner}>
                <div onClick={props.delModal} className={styles.modal__inner__close}>
                    <span className={styles.modal__inner__close__line}></span>
                    <span className={styles.modal__inner__close__line}></span>
                </div>
                <div className={styles.modal__inner__contents}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Modal;