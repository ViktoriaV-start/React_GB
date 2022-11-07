import { NavLink } from "react-router-dom"
import TransitionAlerts from "../alerts"
import { MyButton } from "../MyButton"

export const Profile = ({name, email, alert, visible, saveVisible, changeScreen}) => {
  return (
  <main className="profile__wrapper container">
    
      <div className="profile">

        <div className="profile__head">PROFILE PAGE</div>

        <div className={alert}>
          <TransitionAlerts />
        </div>

        <div className="profile__user">

          <div className="profile__text">Name:</div>
          <input type="text"
                 className="profile__input"
                 value={name}
                 readOnly
                 />

          <div className="profile__text">Email:</div>
          <input type="email"
                 name="email"
                 className="profile__input"
                 value={email}
                 
                 readOnly
                 />
          <div className="profile__text">Show Email:</div>       
          <input type="checkbox"
                 className="profile__checkbox"
                 checked={visible}
                 onClick={saveVisible}
                 readOnly
                 />
        </div>
        
      </div>

      
        <MyButton func={changeScreen}>Edit</MyButton>
      
      
    </main>
    )
}