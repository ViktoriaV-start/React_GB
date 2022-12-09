import * as React from 'react';
import { useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { addChat, deleteChat, initChatsTrack, stopChatsTrack } from "../store/chats/actions";
import { addRelation, deleteRelation, initRelationsTrack, stopRelationsTrack } from "../store/relation/actions";
import { selectChats } from "../store/chats/selectors";
import { selectRelation } from "../store/relation/selectors";
import { selectMessages } from "../store/messages/selectors";
import { initMessages, initMessagesTrack, stopMessagesTrack, updateMessages } from "../store/messages/actions";
import { ChatsMarkup } from './chats-components/ChatsMarkup';
import { Navigate, useParams } from 'react-router';
import { onValue, ref, remove, set } from 'firebase/database';
import { chatsRef, db, getChatRefById, getMsgsListRefById, getMsgsRefById, getRelationRefById, messagesRef, relationsRef } from '../services/firebase';
import { INITIAL_CHATS, INITIAL_MESSAGES, SLUG_ID } from '../config/constants';


export const Chats = () => {

  // set(messagesRef, 
    
  //   {
  //     'chat-1': { 'messagesList': { {'text': 'Bot message start', 'author': 'Bot', 'id': 'msg-music'}, } },
  //     'chat-2': {'msg-food': {'text': 'Bot message start', 'author': 'Bot', 'id': 'msg-food'}},
  //     'chat-3': {'msg-art': {'text': 'Bot message start', 'author': 'Bot', 'id': 'msg-art'}},
      
  //   }
  //   );


  // set(getMsgsListRefById('chat-2'), { 'author': 'Bot', 'id': `msg-food`, 'text': 'Welcome to our chat!'} );
  // set(getMsgsListRefById('chat-3'), { 'author': 'Bot', 'id': `msg-art`, 'text': 'Welcome to our chat!'} );


  const alertMessages = {
    'empty': 'Enter correct name/ short name',
    'duplicateName': 'Enter another name',
    'duplicateSlug': 'Enter another short name',
    'other': 'Something goes wrong. Try later!'
  };

  const dispatch = useDispatch();

  const chats = useSelector(selectChats, shallowEqual); //здесь chats - это название раздела в state
                      // название это задаем сами в rootReducer, сейчас там два раздела: chats/ profile.
  const relations = useSelector(selectRelation, shallowEqual);
  const messages = useSelector(selectMessages, shallowEqual);
  const {slug} = useParams(); //взять только значение из приходящего объекта ключ/значение
  const id = relations[slug]; // взять id из таблицы соответствия по пришедшему слагу

  //const [newChat, setNewChat] = useState({});
  const [chatName, setChatName] = useState("Let's chat about ...");
  const [chatSlug, setChatSlug] = useState('new-chat');
  const [alert, setAlert] = useState('hidden');
  const [alertText, setAlertText] = useState('');

  const getCurrenMsg = (id) => {
    if (!messages[id] || messages[id].length <= 1) return false;
    return messages[id][messages[id].length-2]?.text;
  };

  const getCurrenUser = (id) => {
    if (!messages[id] || messages[id].length <= 1) return false;
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

    //dispatch(addChat(obj));
    // dispatch(addRelation(newRelation));
    // dispatch(initMessages(obj.id));


    set(getChatRefById(obj.id), obj);
    set(getRelationRefById(obj.slug), obj.id);
    set(getMsgsRefById(obj.id), { exists: true });


    setChatName('');
    setChatSlug('');
  }


  useEffect(() => {
 
    dispatch(initChatsTrack());
    dispatch(initRelationsTrack());
   // dispatch(initMessagesTrack());

    return () => {
      dispatch(stopChatsTrack());
      dispatch(stopRelationsTrack());
     // dispatch(stopMessagesTrack());
    };
  }, []);


  // ******************************** УДАЛЕНИЕ ЧАТА
  const delChat = (chatId) => {


    let idSlugRelation = {};

    Object.entries(relations).forEach(([key, value]) => {
      idSlugRelation[value] = key;
    })
   
    let needleSlug = idSlugRelation[chatId];

    // dispatch(deleteRelation(needleSlug));
    // dispatch(deleteChat(chatId));

    remove(getChatRefById(chatId));
    set(getMsgsRefById(chatId), null);
    remove(getRelationRefById(needleSlug));

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


