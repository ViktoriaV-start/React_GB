
import { Chat } from "./Chat";
import {useState} from "react";



export const Main = () => {

    const name = "Guest";

    return (
        <>
            <header className="header-wrapper">
                <div className="header container">LET'S CHAT====</div>
            </header>

            <section className="chat container">
                <div className="chat__salute">Hello, {name}, welcome to our chat!</div>
                <Chat/>
            </section>
        </>
    )
};
