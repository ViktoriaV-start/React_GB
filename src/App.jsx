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



export const Home = () => (
    <h4 className="container">HOME PAGE</h4>
)

export const App = () => {

 const {pathname} = useLocation();

  const setActive = ({ isActive }) =>(isActive ? "navigation__active" : "inactive");
    
  const [theme, setTheme] = useState('dark');

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

  return (
        
    <PersistGate persistor={persistor}>
      {/* ЭТО ДЛЯ LOCAL-STORAGE */}


      <Provider store={store}> 
        {/* ЭТО ПРОВАЙДЕР РЕДАКСА */}

        <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
{/* Здесь в value уже передаем не одно значение theme, а объект со значением theme и 
ссылкой на функцию toggleTheme 
Возможна такая запись: {theme, changeTheme: toggleTheme}*/}

          <Header />
          <Navigation setActive={setActive} setClassName={setClassName} />
          <AppRoutes />
        
        </ThemeContext.Provider>

      </Provider>

    </PersistGate>
       
    );
}



