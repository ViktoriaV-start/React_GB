
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserFB, changeVisibleFB, stopProfileTrack } from '../../store/profile/actions.jsx';

import { Edit } from '../profile-components/Edit.jsx';
import { Profile } from '../profile-components/Profile.jsx';
import {selectEmail, selectName, selectVisible} from "../../store/profile/selectors";
import { userEmailRef, userRef, userVisibleRef } from '../../services/firebase.jsx';
import { initProfileTrack } from '../../store/profile/actions.jsx';
 
export const ProfileScreen = () => {

  const dispatch = useDispatch();

  const name = useSelector(selectName); // лежат в selectors, кроме того - ссылка постоянная, возвращается примитив
  const email = useSelector(selectEmail);
  const visible = useSelector(selectVisible);

  const [alert, setAlert] = useState('hidden');
  const [profile, setProfile] = useState(true);

  const saveVisible = (e) => {
    dispatch(changeVisibleFB(e.target.checked));
  }

  const save = (obj) => {
    dispatch(changeUserFB(obj));
  }

  const changeScreen = () => {
    setProfile(!profile);
  }

  const showSuccess = () => {
    setAlert('');
  }

  useEffect(() => {
 
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, []);


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
                    save={save}
                    saveVisible={saveVisible}
                    showSuccess={showSuccess}
                    changeScreen={changeScreen} />
    )
}
