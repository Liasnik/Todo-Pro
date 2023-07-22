import { useState, useRef, useEffect } from 'react'
import { Reorder } from 'framer-motion'
import styles from './Todo.module.css'

function Todo({ index, todo, changeTodo, onDelete }) {
  const [isEdit, setIsEdit] = useState(false)
  const [focusedInput, setFocusedInput] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (focusedInput) {
      inputRef.current.focus()
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      )
      setFocusedInput(null)
    }
  }, [focusedInput])

  function hendleEdit() {
    if (!isEdit) {
      setFocusedInput(inputRef)
    }
    setIsEdit(!isEdit)
    changeTodo({
      ...todo,
      done: false,
    })
  }

  let todoContent
  !isEdit
    ? (todoContent = (
        <>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) =>
              changeTodo({
                ...todo,
                done: e.target.checked,
              })
            }
            className={styles.check}
          />
          <input
            className={styles.todo}
            style={todo.done ? { textDecoration: 'line-through' } : {}}
            readOnly
            value={index + '. ' + todo.text}
          />
          <button onClick={hendleEdit} className={styles.button}>
            Edit
          </button>
        </>
      ))
    : (todoContent = (
        <>
          <input
            ref={inputRef}
            className={styles.todoEdit}
            onChange={(e) =>
              changeTodo({
                ...todo,
                text: e.target.value,
              })
            }
            value={todo.text}
          />
          <button
            className={styles.buttonDel}
            onClick={() => onDelete(todo.id)}
          >
            Delete
          </button>
          <button onClick={hendleEdit} className={styles.button}>
            Save
          </button>
        </>
      ))

  return (
    <Reorder.Item as="div" value={todo} className={styles.listItem}>
      {todoContent}
    </Reorder.Item>
  )
}

export default Todo
