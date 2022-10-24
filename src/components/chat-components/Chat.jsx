import {useEffect, useState} from "react";
import { MessagesList } from "./MessagesList"
import { Form } from "./Form"
import {nameRobot, robotAnswer} from "../../config/constants";

export const Chat = () => {

    // const nameRobot = "Robot";
    // const robotAnswer = {
    //     text: 'Your message has been received',
    //     author: nameRobot,
    //     id: `rob-${Date.now()}`,
    // };

    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState('');
    const [author, setAuthor] = useState('');

    const addMessage = (event) => {
        event.preventDefault();

        if (msg.trim() === '') {
            return;
        }

        setMessages([...messages,
            {
                text: msg,
                author: author ? author : 'Guest',
                id: `msg-${Date.now()}`,
            }
            ]);

    };

    const handleChangeMsg = (event) => {

        setMsg(event.target.value);
    };

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value)
    };

    useEffect(() => {
        let timeout;
        if (messages[messages.length-1]?.author !== nameRobot && msg !== '') {
                timeout = setTimeout(() => {
                    setMessages([...messages, robotAnswer]);
                }, 1000);
        }
        setMsg('');
        setAuthor('');

        return () => {
            clearTimeout(timeout);
        }

    }, [messages]);

    return <div className="chat__content">

        <MessagesList messages={messages} />

        <Form author={author}
              handleChangeAuthor={handleChangeAuthor}
              msg={msg}
              handleChangeMsg={handleChangeMsg}
              addMessage={addMessage}
              messages={messages}
        />

    </div>
}