import {useEffect, useState} from "react";

export const Chat = () => {

    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState('');
    const [author, setAuthor] = useState('');
    const [number, setNumber] = useState(0);

    const addMessage = (event) => {
        event.preventDefault();

        if (msg.trim() === '') {
            return;
        }

        setMessages([...messages,
            {
                text: msg,
                author: author ? author : 'Guest'
            }
            ]);

        setNumber(prevChange => prevChange + 1);
    };

    const handleChangeMsg = (event) => {

        setMsg(event.target.value);
    };

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value)
    };

    useEffect(() => {
        if (msg !== '') {
            setTimeout(() => {
                setMessages([...messages, {text: 'Your message has been received', author: 'Robot'}]);
            }, 2000);
        }
        setMsg('');
        setAuthor('');
    }, [number]);

    return <div className="chat__content">

        {messages.map((item, idx) =>
            <div className="chat__messages" key={idx}>
                <span>{item.author}</span>
                <span>{item.text}</span>
                <button className="chat__btn">Edit</button>
            </div>
        )}

        <form className="chat__inp-wrapper" onSubmit={addMessage}>
            <input className="chat__input" type="text" value={author} onChange={handleChangeAuthor} placeholder="Name"/>
            <input className="chat__input" type="text" value={msg} onChange={handleChangeMsg} placeholder="Type your message"/>
            <button className="chat__btn">Send</button>
        </form>

    </div>
}