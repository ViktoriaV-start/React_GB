
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeEmail, toggleProfile } from '../../store/profile/actions.jsx';

import { Edit } from '../profile-components/Edit.jsx';
import { Profile } from '../profile-components/Profile.jsx';
 
export const ProfileScreen = () => {
    
  const dispatch = useDispatch();

  const name = useSelector(state => state.name);
  const email = useSelector(state => state.email);
  const visible = useSelector(state => state.visible);
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