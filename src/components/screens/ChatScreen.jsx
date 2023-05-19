import { Navigate, Outlet } from "react-router";
import { Chats } from "../Chats";


export const ChatScreen = ({ authed }) => {

  if (!authed) {
    return <Navigate to="/React_GB" />
  }

  return (
  <div className="wrapper container">
    <aside className="sidebar">
      <Chats />
    </aside>

    <Outlet />
    {/*ЭТО ТО, ЧТО ПРИХОДИТ ИЗ ВЛОЖЕННОГО РОУТА КАК children - Chat*/}
  </div>
  )
};