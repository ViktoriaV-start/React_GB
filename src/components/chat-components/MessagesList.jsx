import {useContext} from "react";
import {ROBOT} from "../../config/constants";
import {ThemeContext} from "../ThemeContext";


export const MessagesList = ({ messages, deleteMsg }) => {


  const {theme} = useContext(ThemeContext);
  // Деструктурировали пришедший из контекста объект и вытащили значение
  //  по ключу theme


  const getName = (author) => {
    if (author !== ROBOT) {
      if (theme === "dark") {
        return "chat__text_dark";
      } else {
        return "chat__text_light";
      }
    }
  };

 

  return <div className="chat__list">
    {messages.map((item) =>
      <div className="chat__messages" key={item.id}>
        <span className={getName(item.author) + " chat__author_clr"}>{item.author}</span>
        <span className={getName(item.author)}>{item.text}</span>
        { item.author !== ROBOT
          ?
          <button className="chat__btn" type="button" onClick={(e) => deleteMsg(item.id)}>
            Delete
          </button>
          :
          null }
      </div>
    )}
  </div>
}