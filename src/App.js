import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoMain from './components/TodoMain/TodoMain'
import MainLayout from './layouts/MainLayout'
import NotFound from './components/NotFound'
import TodoPage2 from './components/TodoPage2/TodoPage2'
// import TodoPage8 from './components/TodoPage2/TodoPage8'

function loadTodos(name) {
  const savedTodos = localStorage.getItem(name)
  if (savedTodos) {
    return JSON.parse(savedTodos)
  }
  return []
}

function App() {
  const [todos2, setTodos2] = useState(loadTodos('todosPro2'))
  const [todos3, setTodos3] = useState(loadTodos('todosPro3'))
  const [todos4, setTodos4] = useState(loadTodos('todosPro4'))

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Todo-Pro" element={<MainLayout />}>
            <Route index element={<TodoMain />} />
            <Route
              path="todo2"
              element={
                <TodoPage2
                  todos={todos2}
                  setTodos={setTodos2}
                  name={'list 2'}
                  storageName={'todosPro2'}
                />
              }
            />
            <Route
              path="todo3"
              element={
                <TodoPage2
                  todos={todos3}
                  setTodos={setTodos3}
                  name={'list 3'}
                  storageName={'todosPro3'}
                />
              }
            />
            <Route
              path="todo4"
              element={
                <TodoPage2
                  todos={todos4}
                  setTodos={setTodos4}
                  name={'list 4'}
                  storageName={'todosPro4'}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
