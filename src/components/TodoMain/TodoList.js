import Todo from './Todo'
import styles from './TodoList.module.css'

export default function TodoList({ todos, changeTodo, onDelete }) {
  return (
    <div className={styles.list}>
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
    </div>
  )
}
