import {nameRobot} from "../../config/constants";


export const MessagesList = ({messages}) => {

    return <div className="chat__list">
        {messages.map((item) =>
        <div className="chat__messages" key={item.id}>
            <span>{item.author}</span>
            <span>{item.text}</span>
            { item.author !== nameRobot ? <button className="chat__btn" >Edit</button> : null}

        </div>
    )}
    </div>
}