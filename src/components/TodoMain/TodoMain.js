import { useState, useRef } from 'react'
import { flushSync } from 'react-dom'
import styles from './TodoMain.module.css'
import TodoList from './TodoList'

function loadNextId() {
  const savedNextId = localStorage.getItem('nextIdPro')
  if (savedNextId) {
    return parseInt(savedNextId)
  }
  return 0
}

function saveNextId(nextId) {
  localStorage.setItem('nextIdPro', nextId.toString())
}

function loadTodos() {
  const savedTodos = localStorage.getItem('todosPro')
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}

function saveTodos(todos) {
  localStorage.setItem('todosPro', JSON.stringify(todos))
}

export default function TodoMain() {
  const [todos, setTodos] = useState(loadTodos())
  const [nextId, setNextId] = useState(loadNextId())
  const [text, setText] = useState('')
  const [clearAllList, setClearAllList] = useState(false)
  const [delAll, setDelAll] = useState(false)
  const inputRef = useRef(null)
  const addedRef = useRef(null)

  saveTodos(todos)
  saveNextId(nextId)

  function hendleAddTodo(e) {
    e.preventDefault()
    setText('')
    const newTodo = {
      id: nextId,
      text: text,
      done: false,
    }

    flushSync(() => {
      setTodos([...todos, newTodo])
    })

    setNextId(nextId + 1)
    inputRef.current.focus()
    addedRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    })
  }

  function onChange(e) {
    setText(e.target.value)
  }

  function changeTodo(nextTodo) {
    setTodos(todos.map((todo) => (todo.id === nextTodo.id ? nextTodo : todo)))
  }

  function onDelete(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId))
  }

  const lastNumder = todos.length + 1

  return (
    <div className={styles.todoMain}>
      <div className={styles.header}>
        <h2 style={{ color: 'white' }}>List 1</h2>
        <form onSubmit={hendleAddTodo}>
          <input
            placeholder={'      Enter new todo #' + lastNumder}
            ref={inputRef}
            className={styles.input}
            type="text"
            onChange={onChange}
            value={text}
          />
          <button className={styles.button}>Add</button>
        </form>
      </div>
      <TodoList todos={todos} changeTodo={changeTodo} onDelete={onDelete} />

      <div ref={addedRef} className={styles.buttonDelBlock}>
        {todos.length > 0 ? (
          <>
            <button
              className={styles.buttonDel}
              style={
                clearAllList
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'rgb(134, 89, 89)' }
              }
              onClick={() => setClearAllList(!clearAllList)}
            >
              {!clearAllList ? 'Clear List' : 'Cancel'}
            </button>

            {clearAllList && (
              <button
                title="Delete the list without the possibility of recovery"
                className={styles.buttonDel}
                onClick={() => {
                  setTodos([])
                  setClearAllList(false)
                }}
              >
                Confirm Clear
              </button>
            )}

            <button
              title="Delete complited without the possibility of recovery"
              className={styles.buttonDel}
              style={{ backgroundColor: 'rgb(134, 89, 89)' }}
              onClick={() => {
                setTodos(todos.filter((todo) => todo.done !== true))
                setDelAll(false)
              }}
            >
              Delete Completed
            </button>
          </>
        ) : (
          <h2 className={styles.todoEmpty}>Todo list is empty</h2>
        )}
      </div>
      <div>
        <button
          className={styles.buttonDel}
          style={
            delAll
              ? { backgroundColor: 'green', marginBottom: '25px' }
              : { backgroundColor: 'rgb(134, 89, 89)' }
          }
          onClick={() => setDelAll(!delAll)}
        >
          {!delAll ? 'Reset All App' : 'Cancel'}
        </button>

        {delAll && (
          <form>
            <button
              title="Delete the data of the entire application without the possibility of recovery"
              className={styles.buttonDel}
              onClick={() => localStorage.clear()}
            >
              Confirm Reset All App
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
