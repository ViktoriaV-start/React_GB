import { NavLink } from "react-router-dom"


export const Navigation = ({ setActive, setClassName }) => {
  return (
    <nav className="navigation">
      <NavLink to="/React_GB" className={setActive}>Home</NavLink>
      <NavLink to="/React_GB/chats" className={setClassName}>All Chats</NavLink>
      <NavLink to="/chats/music" className={setActive}>Music</NavLink>
      <NavLink to="/chats/food" className={setActive}>Food</NavLink>
      <NavLink to="/chats/art" className={setActive}>Art</NavLink>
      <NavLink to="/React_GB/fun" className={setActive}>Fun</NavLink>
    </nav>
  )
}