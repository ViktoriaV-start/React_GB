import { onValue, set } from "firebase/database";
import { auth, getUserRefById, userEmailRef, userVisibleRef } from "../../services/firebase";

export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';
export const CHANGE_EMAIL = 'PROFILE::CHANGE_EMAIL';
export const TOGGLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';

export const toggleProfile = (visible) => ({  // СМОТРИ - ЗДЕСЬ БЫЛ ДРУГОЙ СИНТАКСИС - ЭТА КОНСТАНТА ПРОСТО ОБЪЕКТ, НЕ ФУНКЦИЯ
    type: TOGGLE_PROFILE,
    visible,
});

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name,
});

export const changeEmail = (email) => ({
  type: CHANGE_EMAIL,
  email,
});


// ------------------------------------------------------------

let unscribe;

// ЭТА ФУНКЦИЯ ДИСПАТЧИТ В наш СТОР ДАННЫЕ ИЗ firebox
export const initProfileTrack = () => (dispatch) => {

  const unsubscribeUser = onValue(getUserRefById(auth.currentUser.uid), (snapshot) => {
    if (!snapshot.val()) {
      initUserFB();
    } else {
      
      dispatch(changeName(snapshot.val().name));
      dispatch(changeEmail(snapshot.val().email));
      dispatch(toggleProfile(snapshot.val().visible));
    }
  });

  unscribe = () => { // переприсваиваем в unscribe функции для отписки от отслеживания событий, здесь не вызываем
    unsubscribeUser();
  };
};

export const stopProfileTrack = () => () => {
  unscribe(); // при размонтировании - вызывается функция с размонтированием
};

export const changeEmailFB = (email) => () => {
  set(userEmailRef, email);
};

export const changeVisibleFB = (value) => () => {
  set(userVisibleRef(auth.currentUser.uid), value);
};


export const changeUserFB = (obj) => () => {
  
  set(getUserRefById(auth.currentUser.uid), obj);
};

export const initUserFB = () => {
  
let obj = {
  email: auth.currentUser.email,
  name: 'Guest',
  visible: false
  }
  set(getUserRefById(auth.currentUser.uid), obj)
}