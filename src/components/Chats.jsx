import * as React from 'react';
import {NavLink} from 'react-router-dom';
import { useState } from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import {MyButton} from "./MyButton";

import { addChat, deleteChat } from "../store/chats/actions";
import {addRelation, deleteRelation} from "../store/relation/actions";
import { selectChats } from "../store/chats/selectors";
import {selectRelation} from "../store/relation/selectors";
import {selectMessages} from "../store/messages/selectors";
import {initMessages} from "../store/messages/actions";




export const Chats = () => {

  const dispatch = useDispatch();

  const chats = useSelector(selectChats, shallowEqual); //здесь chats - это название раздела в state
                      // название это задаем сами в rootReducer, сейчас там два раздела: chats/ profile.
  const relation = useSelector(selectRelation, shallowEqual);
  const messages = useSelector(selectMessages, shallowEqual);

  //const [newChat, setNewChat] = useState({});
  const [chatName, setChatName] = useState("Let's chat about ... ");
  const [chatSlug, setChatSlug] = useState('new-chat');


  // const [showForm, setShowForm] = useState(false);
  // const closeForm = () => setShowForm(false);
  // const openForm = () => setShowForm(true);

  const getCurrenMsg = (id) => {
    if (messages[id].length <= 1) return false;
    return messages[id][messages[id].length-2]?.text;
  };

  const getCurrenUser = (id) => {
    if (messages[id].length <= 1) return false;
    return messages[id][messages[id].length-2]?.author;
  };


  function handleChatName(event) {
    let name = event.target.value;
    setChatName(name);
  }

  function handleChatSlug(event) {
    let slug = event.target.value;

    if (slug.trim() === '') {
      let arrayName = chatName.split(' ');
      let idx = Math.floor(Math.random() * arrayName.length);
      slug = arrayName[idx];
      setChatSlug(slug);
      console.log(slug);
    } else {


      setChatSlug(slug.trim().replaceAll(' ', '-'));
    }
  }

  // ********************* ДОБАВЛЕНИЕ НОВОГО ЧАТА
  const addNewChat = () => {

    let id = `chat-${Date.now()}`;

    let obj = {
      id: id,
      name: chatName.trim(),
      slug: chatSlug,
      alt: 'N',
      avatar: '/React_GB/img/custom.jpg',
      currentUser: 'ChatBot',
      currentMsg: " Welcome to new chat!"
    }

    let newRelation = { [obj.slug]: obj.id };

    dispatch(addChat(obj));
    dispatch(addRelation(newRelation));
    dispatch(initMessages(obj.id));


    setChatName("Let's chat about ... ");
    setChatSlug('');
  }

  // ******************************** УДАЛЕНИЕ ЧАТА
  const delChat = (ev) => {

    let idSlugRelation = {};

    Object.entries(relation).forEach(([key, value]) => {
      idSlugRelation[value] = key;
    })

    let needleSlug = idSlugRelation[ev.target.dataset['id']];
    dispatch(deleteRelation(needleSlug));
    dispatch(deleteChat(ev.target.dataset['id']));
  }

  return (
    <>
      <div>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

          {chats.map((el) => (
            <NavLink to={`/chats/${el.slug}`} key={el.id}
                     className={({isActive}) => (isActive ? "sidebar__active" : "sidebar__inactive")}>

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={el.alt} src={el.avatar}/>

                </ListItemAvatar>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{display: 'inline'}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {/*{getCurrenUser(el.id) ? getCurrenUser(el.id) : el.currentUser}*/}
                        USER
                      </Typography>
                      {/*{" — " + (getCurrenMsg(el.id) ? getCurrenMsg(el.id) : el.currentMsg)}*/}
                      message
                    </React.Fragment>
                  }
                />

                <button className="chats__delete-wrapper" onClick={delChat} type="submit" data-id={el.id}>
                  <svg onClick={delChat} className="chats__delete" data-id={el.id} fill="currentColor" height="15"
                       width="15" viewBox="0 0 512 512">
                    <path data-id={el.id} onClick={delChat}
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                  </svg>
                </button>

              </ListItem>
              <Divider variant="inset" component="li"/>

            </NavLink>

          ))}

          <form className="create-chat">

            <div className="create-chat__header">
              <span>Create your chat</span>
              {/*<button className="create-chat__close" onClick={closeForm} type="submit">x</button>*/}
            </div>

            <div className="create-chat__form">

              <span>Chat name</span>
              <input className="create-chat__input"
                     type="text"
                     value={chatName}
                     onChange={handleChatName}
              />

              <span>Chat name shortly</span>
              <input className="create-chat__input"
                // ref={inputRef}
                     type="text"
                     value={chatSlug}
                     onChange={handleChatSlug}
              />

              <button onClick={addNewChat} className="chat__btn" type="button">Save</button>

            </div>
          </form>

        </List>
      </div>

      {/*<button onClick={openForm} className="btn-create" type="button">Create Chat</button>*/}
      {/*<form className={ showForm ? "create-chat" : "create-chat display-none" }>*/}

    </>
  )
}
