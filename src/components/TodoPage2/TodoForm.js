import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

export default function TodoForm({ addTodo, scrollDown }) {
  const [text, setText] = useState('')

  const addSubmitHandler = (e) => {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={addSubmitHandler}>
        <input
          placeholder="Enter new todo"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <Button type="submit" title="Submit" onClick={scrollDown}>
          Submit
        </Button>
      </form>
    </div>
  )
}
