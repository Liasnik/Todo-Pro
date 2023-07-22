import { Reorder } from 'framer-motion'
import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ todos, setTodos, deleteTodo, doneHendler }) {
  return (
    <Reorder.Group
      as="div"
      axis="y"
      values={todos}
      onReorder={setTodos}
      className={styles.todoListContainer}
    >
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          doneHendler={doneHendler}
        />
      ))}
    </Reorder.Group>
  )
}
