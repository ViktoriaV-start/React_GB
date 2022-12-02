import { Route, Routes } from "react-router"
import { Home } from "../../App"
import { Chat } from "../chat-components/Chat"
import { ChatScreen } from "../screens/ChatScreen"
import { FunScreen } from "../screens/FunScreen"
import { ProfileScreen } from "../screens/ProfileScreen"


export const AppRoutes = () => {
  return (
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
  )
}