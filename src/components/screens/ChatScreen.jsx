import { Outlet } from "react-router";

import { Chats } from "../Chats";
//import { OutletContext } from "../OutletContext";



export const ChatScreen = () => {

  return (

  //   <OutletContext.Provider value={ {messages: messages, setMessages: setMessages }}>
  //
  // ЭТО СПОСОБ, ЧТОБЫ ПЕРЕДАТЬ messages В Outlet=Chat. Напрямую пропсами не работает

  <div className="wrapper container">

        <Outlet />
        {/*ЭТО ТО, ЧТО ПРИХОДИТ ИЗ ВЛОЖЕННОГО РОУТА КАК children - Chat*/}

        <aside className="sidebar">
          <Chats />
        </aside>
      </div>
  // {/*</OutletContext.Provider>*/}
  )
};