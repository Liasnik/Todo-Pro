import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="nav">
      <NavLink to="/Todo-Pro" end>
        Todo-Main
      </NavLink>
      <NavLink to="todo2">List2</NavLink>
      <NavLink to="todo3">List3</NavLink>
      <NavLink to="todo4">List4</NavLink>
    </nav>
  )
}
