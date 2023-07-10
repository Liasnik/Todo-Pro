import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="nav">
      <NavLink to="/Todo-Pro" end>
        Todo-Main
      </NavLink>
      <NavLink to="todo2">Todo2</NavLink>
      <NavLink to="todo3">Todo3</NavLink>
      <NavLink to="todo4">Todo4</NavLink>
    </nav>
  )
}
