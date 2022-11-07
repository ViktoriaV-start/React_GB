import {useEffect, useRef} from "react";

export const Form = ({author, msg, messages, handleChangeAuthor, handleChangeMsg, addMessage}) => {

    const inputRef = useRef(null);

    useEffect(() => { inputRef.current?.focus();
    }, [messages]);

    return <form className="chat__inp-wrapper" onSubmit={addMessage}>

        <input className="chat__input"
               type="text"
               value={author}
               onChange={handleChangeAuthor}
               placeholder="Name"/>

        <input className="chat__input"
               ref={inputRef}
               type="text"
               value={msg}
               onChange={handleChangeMsg}
               placeholder="Type your message"/>
        <button className="chat__btn">Send</button>
    </form>;
}
