
import { Chat } from "./chat-components/Chat";
import {useState} from "react";
import {RenderTree} from "./RenderTree";
import {Sidebar} from "./Sidebar";
import {Button} from "@mui/material";



export const Main = () => {

    const name = "Guest";

    return (
        <>
            <header className="header-wrapper">
                <div className="header container">LET'S CHAT====</div>
            </header>

            <div className="wrapper container">
                <main className="chat">
                    <div className="chat__salute">Hello, {name}, welcome to our chat!</div>
                    <Chat/>
                </main>

                <aside className="sidebar">
                    <Sidebar />
                </aside>
            </div>
        </>
    )
};
