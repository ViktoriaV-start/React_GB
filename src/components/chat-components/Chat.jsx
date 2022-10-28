import {useEffect, useState} from "react";
import { MessagesList } from "./MessagesList"
import { Form } from "./Form"
import {ROBOT, ANSWER} from "../../config/constants";
import { Navigate, useParams } from "react-router";

const initMessages = {
    music: [],
    food: [],
    art: [],
};

export const Chat = () => {

    const [messages, setMessages] = useState(initMessages);
    const [msg, setMsg] = useState('');
    const [author, setAuthor] = useState('');
    const { slug } = useParams();
    const name = "Guest";

    const addMessage = (event) => {
        event.preventDefault();

        if (msg.trim() === '') {
            return;
        }

        setMessages({...messages,
            [slug]: [...messages[slug],
            {
                text: msg,
                author: author ? author : 'Guest',
                id: `msg-${Date.now()}`,
            }]
        });

    };

    const handleChangeMsg = (event) => {

        setMsg(event.target.value);
    };

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value)
    };

    useEffect(() => {
        let timeout;
        const lastMessage = messages[slug]?.[messages[slug]?.length-1];
        if (lastMessage?.author !== ROBOT && msg !== '') {
                timeout = setTimeout(() => {
                    setMessages({...messages, [slug]: [...messages[slug], ANSWER]});
                }, 1000);
        }
        setMsg('');
        setAuthor('');

        return () => {
            clearTimeout(timeout);
        }

    }, [messages[slug]]);

    if (!messages[slug]) {
        return <Navigate to='/chat' replace />
    }

    return <main className="chat">
            <div className="chat__salute">Hello, {name}, welcome to our 
            <span className="chat__name"> {slug}</span> chat!</div>
    
            <div className="chat__content">

            <MessagesList messages={messages[slug]} />

            <Form author={author}
                  handleChangeAuthor={handleChangeAuthor}
                  msg={msg}
                  handleChangeMsg={handleChangeMsg}
                  addMessage={addMessage}
                  messages={messages}
            />

            </div>
        </main>
}

