import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import { ThemeContext } from "./components/ThemeContext";
import { Provider } from 'react-redux'; // это провайдер из редакса, в который оборачиваем весь объект, 
import { persistor, store } from "./store"; // это сам стор, который создали в файле src/store/index.jsx
import { PersistGate } from "redux-persist/integration/react";

import { Header } from "./components/common/Header";
import { Navigation } from "./components/common/Navigation";
import { AppRoutes } from './components/common/AppRoutes';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './services/firebase';


export const App = () => {

 const {pathname} = useLocation();

  const setActive = ({ isActive }) =>(isActive ? "navigation__active" : "inactive");
    
  const [theme, setTheme] = useState('dark');

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  }

  const handleLogout = () => {
    setAuthed(false);
  }

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

  const setClassName = () => {
    if (pathname === '/chats') {
      return "navigation__active";
    } else {
      return "inactive";
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {  // это слушатель события,
      // объект auth - объект от firebase, можно посмотреть, там разные данные
      if(user) {
        handleLogin();
      } else {
        handleLogout();
      }
    });

    return unsubscribe; // отписаться от слушателя события, этот слушатель имеет в качестве возвращаемого значения свою собственную ф-цию Unsubscribe
  }, []);

  return (
        
    <PersistGate persistor={persistor}>
      {/* ЭТО ДЛЯ LOCAL-STORAGE */}

      <Provider store={store}> 
        {/* ЭТО ПРОВАЙДЕР РЕДАКСА */}

        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
{/* Здесь в value уже передаем не одно значение theme, а объект со значением theme и 
ссылкой на функцию toggleTheme 
Возможна такая запись: {theme, changeTheme: toggleTheme}*/}

          <Header authed={authed} />
          <Navigation setActive={setActive} setClassName={setClassName} />
          <AppRoutes authed={authed}/>
        </ThemeContext.Provider>
      </Provider>
    </PersistGate>
    );
}



