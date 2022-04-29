import { useState } from "react";
import Todo from "../components/commons/Todo.js";
import EditModal from "../components/EditModal.js";
import styles from "../styles/Index.module.css";

const Home = () => {
  const [tmpTodo, setTmpTodo] = useState("");
  const [tmpText, setTmpText] = useState("");
  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState({
    isActive: false,
    todo: "",
    text: "",
    index: 0,
  });


  const addTodo = () => {
    setTodos([...todos, {
      todo: tmpTodo,
      text: tmpText,
    }]);
    setTmpTodo("");
    setTmpText("");
  }

  const delTodo =(index) => {
    const tmpTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })
    setTodos(tmpTodos);
  }

  const editTodo =(index) => {
    setModal({
        todo: todos[index].todo,
        text: todos[index].text,
        index: index,
        isActive: true,
    });
  }
  
  const delModal = () => {
    setModal({
      isActive: false,
      todo: "",
      text: "",
      index: 0,
    });
  }

  const edit = () => {
    const tmpTodos = Array.from(todos);
    tmpTodos[modal.index].todo = modal.todo;
    tmpTodos[modal.index].text = modal.text;
    setTodos(tmpTodos);
    delModal()
  }

  return (<>
    <EditModal
      isActive={modal.isActive}
      edit={edit}
      delModal={delModal}
      todo={modal.todo}
      text={modal.text}
      changeTodo={e => setModal({
        ...modal,
        todo: e.target.value,
      })}
      changeText={e => setModal({
        ...modal,
        text: e.target.value,
      })}
    />
    <input className={`${styles.input} ${styles.block}`} onChange={e => setTmpTodo(e.target.value)} value={tmpTodo} />
    <input className={styles.input} onChange={e => setTmpText(e.target.value)} value={tmpText} />
    <button onClick={addTodo}>追加</button>
    <br />
    {todos.map((todo, index) => (
        <Todo
          key={index}
          edit={() => editTodo(index)}
          del={() => delTodo(index)}
          todo={todo.todo}
          text={todo.text}
        />)
      )}
  </>)
}

export default Home;