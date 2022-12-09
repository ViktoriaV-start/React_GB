import { Route, Routes } from "react-router"

import { Chat } from "../chat-components/Chat"
import { PrivateRoute } from "../PrivateRoute/PrivateRoute"
import { PublicRoute } from "../PublicRoute/PublicRoute"
import { ChatScreen } from "../screens/ChatScreen"
import { FunScreen } from "../screens/FunScreen"
import { HomeScreen } from "../screens/HomeScreen"
import { ProfileScreen } from "../screens/ProfileScreen"


export const AppRoutes = ({ authed }) => {
  return (
    <Routes>

      <Route path="/" element={<PublicRoute authed={authed} />}>
        <Route path="" element={<HomeScreen />} />
        <Route path="signup" element={<HomeScreen  />} />
      </Route>

      <Route path="/React_GB" element={<PublicRoute authed={authed} />}>
        <Route path="" element={<HomeScreen />} />
        <Route path="signup" element={<HomeScreen />} />
      </Route>

      <Route path="/profile" element={<PrivateRoute authed={authed} />}>
        <Route path="" element={<ProfileScreen />} />
      </Route>

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