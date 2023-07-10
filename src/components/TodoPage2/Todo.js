// import { useState, useRef, useEffect } from 'react'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, doneHendler }) {
  return (
    <div
      className={`${styles.todo} ${todo.done ? styles.completedTodo : ''}`}
      onDoubleClick={() => deleteTodo(todo.id)}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        style={todo.done ? { color: 'green' } : ''}
        onClick={() => doneHendler(todo.id)}
      />
    </div>
  )
}

export default Todo
