import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TodoMain from './components/TodoMain/TodoMain'
import MainLayout from './layouts/MainLayout'
import NotFound from './components/NotFound'
import TodoPage2 from './components/TodoPage2/TodoPage2'
import TodoPage3 from './components/TodoPage2/TodoPage3'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Todo-Pro" element={<MainLayout />}>
            <Route index element={<TodoMain />} />
            <Route path="todo2" element={<TodoPage2 />} />
            <Route path="todo3" element={<TodoPage3 />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
