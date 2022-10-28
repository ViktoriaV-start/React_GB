
import { ChatScreen } from "./screens/ChatScreen";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import { Chat } from "./chat-components/Chat";


const Home = () => (
    <h4 className="container">HOME PAGE</h4>
)

const Profile = () => (
    <h4 className="container">LOGIN TO PROFILE</h4>
)


export const Main = () => {

    return (
        <BrowserRouter>
        {/* <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link> */}

            <header className="header-wrapper">
                <div className="header container">
                    <span className="header__name">LET'S CHAT====</span>
                    <NavLink to="/profile">
                        <button className="header__btn" type="submit">Profile</button>
                    </NavLink>
                </div>
            </header>

            <nav className="navigation">
                <NavLink to="/" className={({ isActive }) => (isActive ? "navigation__active" : "inactive")}>Home</NavLink>
                <NavLink to="/chat" className={({ isActive }) => (isActive ? "navigation__active" : "inactive")}>All Chats</NavLink>
                <NavLink to="/chat/music" className={({ isActive }) => (isActive ? "navigation__active" : "inactive")}>Music</NavLink>
                <NavLink to="/chat/food" className={({ isActive }) => (isActive ? "navigation__active" : "inactive")}>Food</NavLink>
                <NavLink to="/chat/art" className={({ isActive }) => (isActive ? "navigation__active" : "inactive")}>Art</NavLink>
            </nav>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chat" element={<ChatScreen />}>
                    <Route path=":slug" element={<Chat />} /> 
                    {/* Это то, что идет в <Outlet /> */}
                </Route>
                <Route path="*" element={<h4>404</h4>} />
                {/* Если все предыдущие маршруты не подошли по введенному урлу - идет страница с ошибкой 404;
                Здесь * - это регулярное выражение */}

            </Routes>
        </BrowserRouter>
    );
}
