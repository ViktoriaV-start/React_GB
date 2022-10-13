import {useState} from "react";

export const Message = () => {

    const [messages, setMessages] = useState(['Hello, friend!',]);
    const [msg, setMsg] = useState('');


    const addMessage = (event) => {
        if (msg) {
            setMessages([...messages, msg]);
        }
    };

    const handleChangeMsg = (event) => {
            setMsg(event.target.value)
    };

    return <div className="chat__content">

        {messages.map((item, idx) =>
            <div className="chat__messages" key={idx}>{item}<button className="chat__btn">Edit</button></div>)}

        <div className="chat__inp-wrapper">
            <input className="chat__input" type="text" value={msg} onChange={handleChangeMsg} placeholder="Type your message"/>
            <button className="chat__btn"type="button" onClick={addMessage}>Send</button>
        </div>

    </div>
}