import {useContext, useEffect, useState} from "react";
import {Navigate, useParams} from "react-router";

import {MessagesList} from "./MessagesList"
import {Form} from "./Form"
import {ANSWER, ROBOT} from "../../config/constants";

import {MyButton} from "../MyButton";
import {ThemeContext} from "../ThemeContext";
//import {OutletContext} from "../OutletContext";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectRelation } from "../../store/relation/selectors";
import { selectMessages } from "../../store/messages/selectors";
import {addNewMessage, deleteMessage} from "../../store/messages/actions";


export const Chat = () => {


  // ЭТО КУСОК КОДА - ДАННЫЕ ПЕРЕДАЮТСЯ ИЗ КОНТЕКСТА ИЗ РОДИТЕЛЯ, ПОТОМУ ЧТО В OUTLET НАПРЯМУЮ
  // НЕ ПОЛУЧАЕТСЯ ПЕРЕДАТЬ ДАННЫЕ ПРОПСАМИ
  //const messages = (useContext(OutletContext)).messages;
  //const setMessages = (useContext(OutletContext)).setMessages;
  //const relation = (useContext(OutletContext)).relation;

  const dispatch = useDispatch();

  const relation = useSelector(selectRelation, shallowEqual);
  const messages = useSelector(selectMessages, shallowEqual);

  const [msg, setMsg] = useState('');
  const [author, setAuthor] = useState('');
  const {slug} = useParams(); //взять только значение из приходящего объекта ключ/значение
  const id = relation[slug]; // взять id из таблицы соответствия по пришедшему слагу
  const name = "Guest";

  const {toggleTheme} = useContext(ThemeContext);
  const {theme} = useContext(ThemeContext);


  const addMessage = (event) => {
    event.preventDefault();

    if (msg.trim() === '') {
      return;
    }

    let newMsg = {
      text: msg,
      author: author ? author : 'Guest',
      id: `msg-${Date.now()}-${slug}`,
    }

    dispatch(addNewMessage(id, newMsg));


    // setMessages({   ...messages, [id]: [...messages[id], {объект с новым сообщением} ]    });
    // setMessages({...messages, [id]:
    //     [...messages[id],
    //     {
    //      text: msg,
    //      author: author ? author : 'Guest',
    //      id: `msg-${Date.now()}-${slug}`,
    //     }]
    // });

  };

  const handleChangeMsg = (event) => {

    setMsg(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value)
  };

  useEffect(() => {
    let timeout;
    const lastMessage = messages[id]?.[messages[id]?.length - 1];
    if (lastMessage?.author !== ROBOT && msg !== '') {
      timeout = setTimeout(() => {

        dispatch(addNewMessage(id, {
          text: 'Your message has been received',
          author: ROBOT,
          id: `rob-${Date.now()}-${slug}`,
        }));


        // setMessages({
        //   ...messages, [id]: [...messages[id],
        //     {
        //       text: 'Your message has been received',
        //       author: ROBOT,
        //       id: `rob-${Date.now()}-${slug}`,
        //     }
        //   ]
        // });
      }, 1000);
    }
    setMsg('');
    setAuthor('');

    return () => {
      clearTimeout(timeout);
    }

  }, [messages[id]]);

  if (!messages[id]) {
    return <Navigate to='/chats' replace/>
  }


  const deleteMsg = (msgId) => {
    dispatch(deleteMessage(id, msgId));
  }



  return <main className="chat">
    <div className="chat__salute">Hello, {name}, welcome to our
      <span className="chat__name"> {slug}</span> chat!
    </div>

    <div className="chat__content">

      <MessagesList messages={messages[id]} deleteMsg={deleteMsg}/>

      <Form author={author}
            handleChangeAuthor={handleChangeAuthor}
            msg={msg}
            handleChangeMsg={handleChangeMsg}
            addMessage={addMessage}
            messages={messages}
      />

    </div>
    <div className={(messages[id]?.length !== 0) ? "" : "display-none"}>
      <MyButton func={toggleTheme}>Theme</MyButton>
    </div>
  </main>
}

