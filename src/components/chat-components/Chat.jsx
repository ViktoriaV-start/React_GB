import {useContext, useEffect, useState} from "react";
import { Navigate, useParams } from "react-router";

import {MessagesList} from "./MessagesList"
import {Form} from "./Form"

import {MyButton} from "../MyButton";
import {ThemeContext} from "../ThemeContext";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectRelation } from "../../store/relation/selectors";
import { selectMessages } from "../../store/messages/selectors";
import { addMessageWithReplyFB, updateMessages} from "../../store/messages/actions";
import { getMsgsRefById, messagesRef, getMsgsListRefById, getUserNameRefById, auth, db } from "../../services/firebase";
import { onValue, set, push } from "firebase/database";


export const Chat = () => {

  const dispatch = useDispatch();

  const relation = useSelector(selectRelation, shallowEqual);
  const messagesStore = useSelector(selectMessages, shallowEqual); 
  const [msg, setMsg] = useState('');
  const [author, setAuthor] = useState('');
  const {slug} = useParams(); //взять только значение из приходящего объекта ключ/значение
  const id = relation[slug]; // взять id из таблицы соответствия по пришедшему слагу
  const name = "Guest";

  const messages = messagesStore[id];
  const [userName, setUserName] = useState('');

  const {toggleTheme} = useContext(ThemeContext);
  const {theme} = useContext(ThemeContext);


  // **************************** ДОБАВЛЕНИЕ ОДНОГО СООБЩЕНИЯ *****************************
  const addMessage = (event) => {
    event.preventDefault();

    if (msg.trim() === '') {
      return;
    };

    let newMsg = {
      text: msg,
      author: userName ? userName : 'Guest',
      id: `msg-${Date.now()}-${slug}`,
    };

    dispatch(addMessageWithReplyFB(id, newMsg, slug));

    setMsg('');
    setAuthor('');
  };

  const handleChangeMsg = (event) => {

    setMsg(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value)
  };


  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {

      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        console.log('error loading');
      } else {

        dispatch(updateMessages(id, (Object.values(val.messagesList || {}))));
      }
    });
    return unsubscribe;
  }, [slug]);


  useEffect(() => {

    if (auth.currentUser) {
      const unsubscribe = onValue(getUserNameRefById(), (snapshot) => {

        const val = snapshot.val();
        setUserName(val);
     });
      return unsubscribe;
    }

  }, [msg]);

  if (!id) {
    return <Navigate to='/React_GB/chats' replace/>
  }


  // **************************** УДАЛЕНИЕ ОДНОГО СООБЩЕНИЯ *****************************
  const deleteMsg = (msgId) => {
    
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {

      const val = snapshot.val().messagesList || {};

      if (!snapshot.val()?.exists) {
        console.log('error loading');
      } else {
        set(getMsgsListRefById(id), Object.values(val).filter(({ id }) => id !== msgId ));
      }
    });
    return unsubscribe;

  }

  return (
    <main className="chat">
      <div className="chat__salute">Hello, {name}, welcome to our
        <span className="chat__name"> {slug}</span> chat!
      </div>

      <div className="chat__content">

      { messages && <MessagesList messages={messages || {}} deleteMsg={deleteMsg}/> }


        <Form author={author}
            handleChangeAuthor={handleChangeAuthor}
            msg={msg}
            handleChangeMsg={handleChangeMsg}
            addMessage={addMessage}
            messages={messages}
        />

      </div>
      <div className={(messages?.length !== 0) ? "" : "display-none"}>
        <MyButton func={toggleTheme}>Theme</MyButton>
      </div>
    </main>
  )
}

