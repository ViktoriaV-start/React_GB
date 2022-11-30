
import { ChatScreen } from "./screens/ChatScreen";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import { Chat } from "./chat-components/Chat";
import { MyButton } from "./MyButton";
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

 import { ProfileScreen } from "./screens/ProfileScreen"; // это компонент профиль
 import { FunScreen } from "./screens/FunScreen";


// ИМПОРТЫ ДЛЯ РЕДАКСА
import { Provider } from 'react-redux'; // это провайдер из редакса, 
//в который оборачиваем весь объект, 
import { persistor, store } from "../store"; 
import { PersistGate } from "redux-persist/integration/react";
// это сам стор, который создали в файле src/store/index.jsx


const Home = () => (
    <h4 className="container">HOME PAGE</h4>
)

export const Main = () => {

  const setActive = ({ isActive }) =>(isActive ? "navigation__active" : "inactive");
    
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
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


            <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link> */}

                <header className="header-wrapper">
                    <div className="header container">
                        <span className="header__name">LET'S CHAT====</span>
                        <NavLink to="/profile">
                            <MyButton><></>Profile</MyButton>
                        </NavLink>
                    </div>
                </header>

                <nav className="navigation">
                    <NavLink to="/" className={setActive}>Home</NavLink>
                    <NavLink to="/chats" className={setActive}>All Chats</NavLink>
                    <NavLink to="/chats/music" className={setActive}>Music</NavLink>
                    <NavLink to="/chats/food" className={setActive}>Food</NavLink>
                    <NavLink to="/chats/art" className={setActive}>Art</NavLink>
                    <NavLink to="/fun" className={setActive}>Fun</NavLink>
                </nav>

                <Routes>
                
                    <Route path="/" element={<Home />} />
                    <Route path="/React_GB" element={<Home />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/fun" element={<FunScreen />} />
                    <Route path="/chats" element={<ChatScreen />}>
                        <Route path=":slug" element={<Chat />} />
                    {/* Это children, то, что идет в <Outlet /> */}
                    </Route>
                    <Route path="*" element={<h4>404</h4>} />
                {/* Если все предыдущие маршруты не подошли по введенному урлу - идет страница с ошибкой 404;
                Здесь * - это регулярное выражение */}

                </Routes>
            </BrowserRouter>

        
            {/* <MyButton func={toggleTheme}>Theme</MyButton> */}
        </ThemeContext.Provider>

    </Provider>

    </PersistGate>
       
    );
}



