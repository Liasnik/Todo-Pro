import { Reorder } from 'framer-motion'
import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ todos, setTodos, changeTodo, onDelete }) {
  return (
    <Reorder.Group
      axis="y"
      values={todos}
      onReorder={setTodos}
      className={styles.list}
    >
      {todos.map((t, index) => (
        <div key={t.id} style={{ display: 'flex' }}>
          <Todo
            index={index + 1}
            todo={t}
            changeTodo={changeTodo}
            onDelete={onDelete}
          />
        </div>
      ))}
    </Reorder.Group>
  )
}
