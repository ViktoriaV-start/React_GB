import { NavLink } from "react-router-dom"
import { logOut } from "../../services/firebase"
import { MyButton } from "../MyButton"


export const Header = ({ authed }) => {
  return (
    <header className="header-wrapper">
      <div className="header container">
        <span className="header__name">LET'S CHAT====</span>
        <div className="header__btns">
        { !authed ? 
            <NavLink to="/React_GB">
              <MyButton>Login</MyButton>
            </NavLink>
            : 
            <>
            <NavLink to="/profile">
              <MyButton>Profile</MyButton>
            </NavLink>

            <span onClick={logOut} className="header__out"><svg className="header__icon" viewBox="0 0 448 512">
              <path className="header__ic" d="M336 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM141.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L153.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L254 299l30.9-82.4 5.1 12.3C305 264.7 339.9 288 378.7 288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H378.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L73.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM107.2 352H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L173 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L107.2 352z"/></svg>
            </span> 
          </>
      }
        </div>
      </div>
    </header>
  )
}