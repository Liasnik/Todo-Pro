import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <nav className="nav">
      <NavLink to="/Todo-Pro" end>
        Main
      </NavLink>
      <NavLink to="todo2">List 2</NavLink>
      <NavLink to="todo3">List 3</NavLink>
      <NavLink to="todo4">List 4</NavLink>
    </nav>
  )
}
