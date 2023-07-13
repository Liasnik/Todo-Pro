import { useRef } from 'react'
import { flushSync } from 'react-dom'
import { v4 as uuidv4 } from 'uuid'
import styles from './TodoPage2.module.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodosActions from './TodosActions'

function saveTodos(name, todos) {
  localStorage.setItem(name, JSON.stringify(todos))
}

export default function TodoPage2({ todos, setTodos, storageName, name }) {
  const downRef = useRef(null)

  saveTodos(storageName, todos)

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      done: false,
    }
    flushSync(() => setTodos([...todos, newTodo]))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const doneToggleHendler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      )
    )
  }

  const resetTodos = () => setTodos([])

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done))
  }

  const scrollDown = () => {
    downRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  const countDone = todos.filter((todo) => todo.done === true).length
  return (
    <div className={styles.TodoFast}>
      <h1>{name}</h1>
      <div className={styles.header}>
        <TodoForm addTodo={addTodoHandler} scrollDown={scrollDown} />
        {!!countDone && (
          <h3>
            Completed {countDone} {countDone > 1 ? 'todos' : 'todo'}
          </h3>
        )}
      </div>
      <div className={styles.body}>
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          doneHendler={doneToggleHendler}
        />
        <div ref={downRef}>
          {!!todos.length && (
            <TodosActions
              resetTodos={resetTodos}
              clearCompleted={clearCompleted}
              todos={todos}
              countDone={!!countDone} // convert to boolean
            />
          )}
        </div>
      </div>
    </div>
  )
}
