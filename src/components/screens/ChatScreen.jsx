import { Chats } from "../Chats";
import { Outlet } from "react-router";

export const ChatScreen = () => {


    return (
        <>
            <div className="wrapper container">
                
                <Outlet />

                <aside className="sidebar">
                    <Chats><span>x</span></Chats>
                </aside>
            </div>

        </>
    )
};