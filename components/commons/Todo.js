import styles from "../../styles/components/commons/Todo.module.css"

const Todo = (props) => {
    return (
        <div className={styles.todo}>
            <div>
                <h1>{props.todo}</h1>
                <p>{props.text}</p>
            </div>
            <div className={styles.todo__action}>
                <button className={styles.todo__action__btn} onClick={props.edit}>編集</button>
                <button className={styles.todo__action__btn} onClick={props.del}>削除</button>
            </div>
        </div>
    );
}

export default Todo;