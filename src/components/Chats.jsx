import * as React from 'react';
import { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { addChat, deleteChat } from "../store/chats/actions";
import { addRelation, deleteRelation } from "../store/relation/actions";
import { selectChats } from "../store/chats/selectors";
import { selectRelation } from "../store/relation/selectors";
import { selectMessages } from "../store/messages/selectors";
import { initMessages } from "../store/messages/actions";
import { ChatsMarkup } from './chats-components/ChatsMarkup';




export const Chats = () => {

  const alertMessages = {
    'empty': 'Enter correct name/ short name',
    'duplicateName': 'Enter another name',
    'duplicateSlug': 'Enter another short name',
    'other': 'Something goes wrong. Try later!'
  };

  const dispatch = useDispatch();

  const chats = useSelector(selectChats, shallowEqual); //здесь chats - это название раздела в state
                      // название это задаем сами в rootReducer, сейчас там два раздела: chats/ profile.
  const relation = useSelector(selectRelation, shallowEqual);
  const messages = useSelector(selectMessages, shallowEqual);

  //const [newChat, setNewChat] = useState({});
  const [chatName, setChatName] = useState("Let's chat about ...");
  const [chatSlug, setChatSlug] = useState('new-chat');
  const [alert, setAlert] = useState('hidden');
  const [alertText, setAlertText] = useState('');

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

    setChatSlug(slug.trim().replaceAll(' ', '-'));
  }

  const showAlert = (text = 'other') => {
    setAlertText(text);
    setAlert('');
  }

  const checkData = () => {
    
    if (chatName === '' || chatSlug === '') {
      showAlert(alertMessages['empty']);
      return false;
    } 

    let arrNames = [];
    let arrSlugs = [];

    chats.map((elem) => {
      arrNames.push(elem.name);
        })
    chats.map((elem) => {
      arrSlugs.push(elem.slug);
        })

    if (arrNames.includes(chatName)) {
      showAlert(alertMessages['duplicateName']);
      return false;
    }

    if (arrSlugs.includes(chatSlug)) {
      showAlert(alertMessages['duplicateSlug']);
      return false;
    }
    
    return true;

  }

  // ********************* ДОБАВЛЕНИЕ НОВОГО ЧАТА
  const addNewChat = () => {

    setAlert('hidden');

    if (!checkData()) return;

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

    setChatName('');
    setChatSlug('');

  }

  // ******************************** УДАЛЕНИЕ ЧАТА
  const delChat = (chatId) => {


    let idSlugRelation = {};

    Object.entries(relation).forEach(([key, value]) => {
      idSlugRelation[value] = key;
    })
   
    let needleSlug = idSlugRelation[chatId];

    dispatch(deleteRelation(needleSlug));
    dispatch(deleteChat(chatId));
  }

  return (
    <ChatsMarkup 
      chats={chats}
      chatName={chatName}
      handleChatName={handleChatName}
      chatSlug={chatSlug}
      handleChatSlug={handleChatSlug}
      addNewChat={addNewChat}
      alert={alert}
      alertText={alertText}
      getCurrenUser={getCurrenUser}
      getCurrenMsg={getCurrenMsg}
      delChat={delChat}
       />
  )
}
