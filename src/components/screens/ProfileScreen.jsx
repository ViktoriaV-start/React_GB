
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeEmail, toggleProfile } from '../../store/profile/actions.jsx';

import { Edit } from '../profile-components/Edit.jsx';
import { Profile } from '../profile-components/Profile.jsx';
import {selectEmail, selectName, selectVisible} from "../../store/profile/selectors";
 
export const ProfileScreen = () => {
    
  const dispatch = useDispatch();

  const name = useSelector(selectName); // лежат в selectors, кроме того - ссылка постоянная, возвращается примитив
  const email = useSelector(selectEmail);
  const visible = useSelector(selectVisible);
  const [alert, setAlert] = useState('hidden');
  const [profile, setProfile] = useState(true);

  const saveVisible = () => {

    return dispatch(toggleProfile());
  }

  const saveEmail = (value) => {
    return dispatch(changeEmail(value));
  }

  const saveName = (value) => {
    return dispatch(changeName(value));
  }

  const changeScreen = () => {
    setProfile(!profile);
  }

  const showSuccess = () => {
    setAlert('');
  }
    
    return (
    profile ? <Profile
                      name={name}
                      email={email}
                      alert={alert}
                      visible={visible}
                      saveVisible={saveVisible}
                      changeScreen={changeScreen} /> :
              <Edit name={name}
                    email={email}
                    visible={visible}
                    saveName={saveName}
                    saveEmail={saveEmail}
                    saveVisible={saveVisible}
                    showSuccess={showSuccess}
                    changeScreen={changeScreen} />
    )
}