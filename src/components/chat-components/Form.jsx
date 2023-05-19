
export const Form = ({ msg, handleChangeMsg, addMessage }) => {


    return <form className="chat__inp-wrapper" onSubmit={addMessage}>

        <input className="chat__input"
               type="text"
               value={msg}
               onChange={handleChangeMsg}
               placeholder="Type your message"/>
        <button className="chat__btn" type="submit">Send</button>
    </form>;
}
