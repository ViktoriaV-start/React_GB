import { NavLink } from "react-router-dom"
import { MyButton } from "../MyButton"


export const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header container">
        <span className="header__name">LET'S CHAT====</span>
        <NavLink to="/profile">
          <MyButton>Profile</MyButton>
        </NavLink>
      </div>
    </header>
  )
}