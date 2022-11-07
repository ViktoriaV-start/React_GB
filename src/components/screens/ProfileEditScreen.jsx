
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeEmail, toggleProfile } from '../../store/profile/actions.jsx';
import { MyButton } from '../MyButton.jsx';
import { Error } from '../alerts.jsx';
 

export const ProfileEditScreen = () => {

  const alertMessages = {
    'errorName': 'Enter correct name',
    'errorEmail': 'Enter correct email address',
    'other': 'Something goes wrong. Try later!'
  };
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = useSelector(state => state.name);
    const email = useSelector(state => state.email);
    const visible = useSelector(state => state.visible);

    const [valueName, setValueName] = useState(name);
    const [valueEmail, setValueEmail] = useState(email);
    const [alertText, setAlertText] = useState('');
    const [alert, setAlert] = useState('hidden');

    const handleName = (event) => {
      return setValueName(event.target.value);
    }
    const handleEmail = (event) => {
      return setValueEmail(event.target.value);
    }
    const showAlert = (text = 'other') => {
      setAlertText(alertMessages[text]);
      setAlert('');
    }

    const makeSave = () => {
      
      const regexp = /^([!#$%&*-+{}|?/~\w]+(.?[\w]+)*@([\w-]{1,255}\.)[\w-]{2,4})?$/;

      if (valueName.trim() !== '') {
        dispatch(changeName(valueName.trim()));
      } else {
        showAlert('errorName');
        return;
      }

      if (!regexp.test(valueEmail.trim())) {
        showAlert('errorEmail');
        return;
      }

      if (valueEmail.trim() !== '') {
        dispatch(changeEmail(valueEmail.trim()));
      }

      return navigate("/profile");
    }

    return (
    <div className="profile__wrapper container">
         

        {/* <div>Name: {name}</div>
        <p>Visible: </p>
        <input type="checkbox" checked={visible} readOnly/>
        <button onClick={() => dispatch(toggleProfile())}>change visible</button>
        
        <br />

        <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={() => dispatch(changeName(value))} type="submit">change name</button>  */}

      <div className="profile">

        <div className="profile__head">EDIT PROFILE</div>

        <div className={"note "+ alert}>
          <Error>{alertText}</Error>
        </div>

        <div className="profile__user">

          <div className="profile__text">Name:</div>
          <input type="text"
                 className="profile__input-edit"
                 value={valueName}
                 placeholder={name}
                 autoFocus={true}
                 required
                 onChange={handleName}
                 />

          <div className="profile__text">Email:</div>
          <input type="email"
                 name="email"
                 className="profile__input-edit"
                 value={valueEmail}
                 placeholder={email} 
                 required
                 onChange={handleEmail}
                 />
          <div className="profile__text">Show Email:</div>
          <input type="checkbox"
                 className="profile__checkbox"
                 checked={visible}
                 onClick={() => dispatch(toggleProfile())}
                 readOnly
                 />
        </div>
        
      </div>
    
      <MyButton func={makeSave}>Save</MyButton>
      
    </div>
    )
}