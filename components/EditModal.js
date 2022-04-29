import Modal from "commons/modal"
import { useState } from "react";
import styles from "../styles/components/pages/EditModal.module.css"

const EditModal = (props) => {
    if (!props.isActive) return <></>;
    return (
        <Modal className={styles.editModal} delModal={props.delModal}>
            <input className={`${styles.editModal__input} ${styles.editModal__block}`} onChange={props.changeTodo} value={props.todo} />
            <input className={styles.editModal__input} onChange={props.changeText} value={props.text} />
            <button onClick={props.edit}>編集</button>
        </Modal>
    )
}

export default EditModal;