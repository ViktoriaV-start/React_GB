
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserFB, changeVisibleFB, stopProfileTrack, toggleProfile } from '../../store/profile/actions.jsx';

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
    //console.log(e.target.checked)
    dispatch(changeVisibleFB(e.target.checked));
    //set(userVisibleRef, !visible );
  }

  // const saveEmail = (value) => {
  //   //return dispatch(changeEmail(value));
  //   set(userEmailRef, {
  //     name,
  //     email: value,
  //     visible,
  //   });
  //   // если в объекте передать null - то сам удалятся (не поняла что)
  //   // а в целом - нужно передать все текущие значения, которые берутся из useState
  // }

  // const saveEmail = (value) => {
  //   dispatch(changeEmailFB(value));
  //   //set(userEmailRef, value);
  // }

  const save = (obj) => {
    dispatch(changeUserFB(obj));
    // set(userNameRef, value);
  }

  const changeScreen = () => {
    setProfile(!profile);
  }

  const showSuccess = () => {
    setAlert('');
  }


  //useEffect(() => {

    // -------------------- ПЕРВЫЙ ВАРИАНТ - ОБРАЩЕНИЕ К ОБЪЕКТУ user --------------------
    // const unsubscrube = onValue(userRef, (snapshot) => {
    //   console.log(snapshot.val()) // метод, который покажет значение рефа
    //   //console.log(snapshot.key) // свойство, которое покажет ключ, по которому данные хранятся

    //   snapshot.forEach((elem) => console.log(elem.val())); //у snapshot есть метод forEach() и свойство key

    //   setName(snapshot.val().name);
    //   setEmail(snapshot.val().email);
    //   setVisible(snapshot.val().visible);
    // });


    // -------------------- ВТОРОЙ ВАРИАНТ - ОБРАЩЕНИЕ непосредственно К ПОЛЮ ОБЪЕКТУ user --------------------

    // const unsubscrubeName = onValue(userNameRef, (snapshot) => {
    //   setName(snapshot.val()); // здесь сразу берется конкретное значение конкретного поля в user
    // });
    // const unsubscrubeEmail = onValue(userEmailRef, (snapshot) => {
    //   setEmail(snapshot.val()); // здесь сразу берется конкретное значение конкретного поля в user
    // });
    // const unsubscrubeVisible = onValue(userVisibleRef, (snapshot) => {
    //   setVisible(snapshot.val()); // здесь сразу берется конкретное значение конкретного поля в user
    // });


  //   //можно сделать отдельные useEffect для каждого и возращать отписку от отслеживания события в виде:
  //   // return unsubscribe;
  //   return () => {
  //     unsubscrubeName();
  //     unsubscrubeEmail();
  //     unsubscrubeVisible();
  //   };
  

  // -------------------- ТРЕТИЙ ВАРИАНТ - ЧЕРЕЗ СВОЙ СТОР И МИДЛВАР --------------------
  //   console.log(44444)

  //   dispatch(initProfileTrack());

  // return () => {
  //   dispatch(stopProfiletrack());  // при размонтировании диспатчим мидлвар для отписки
  // };
  // }, []);

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