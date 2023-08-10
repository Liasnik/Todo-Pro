// import { useState, useRef, useEffect } from 'react'
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { Reorder } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, doneHandler }) {
  return (
    <Reorder.Item
      as="div"
      value={todo}
      className={`${styles.todo} ${todo.done ? styles.completedTodo : ''}`}
      onDoubleClick={() => deleteTodo(todo.id)}
    >
      {todo.done ? (
        <FaCheck
          className={styles.checkIcon}
          onClick={() => doneHandler(todo.id)}
        />
      ) : (
        <RiTodoFill
          className={styles.todoIcon}
          onClick={() => doneHandler(todo.id)}
        />
      )}
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </Reorder.Item>
  )
}

export default Todo
