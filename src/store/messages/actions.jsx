import { onValue } from "firebase/database";
import { ROBOT } from "../../config/constants";
import { getMsgsRefById, messagesRef } from "../../services/firebase";

export const INIT_MESSAGES = 'MESSAGES::INIT_MESSAGES';
export const ADD_NEW_MESSAGE = 'MESSAGES::ADD_NEW_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES';
export const UPDATE_MSGS = 'MESSAGES::UPDATE_MSGS';


export const initMessages = (chatId) => ({
  type: INIT_MESSAGES,
  payload: chatId,
});

export const addNewMessage = (chatId, newMsg) => ({
  type: ADD_NEW_MESSAGE,
  payload: {
    chatId,
    newMsg,
  }
});

export const deleteMessage = (chatId, msgId) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    msgId,
  }
});

export const updateMessages = (chatId, messages) => ({
  type: UPDATE_MESSAGES,
  payload: {
    chatId,
    messages,
  }
});

export const updateMsgs = (messages) => ({
  type: UPDATE_MSGS,
  payload: messages
});




let timeout;

export const addMessageWithReply = (chatId, newMsg, slug) => (dispatch) => {
  dispatch(addNewMessage(chatId, newMsg));

  if (newMsg.author !== ROBOT) {

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      dispatch(addNewMessage(chatId, {
        text: 'Your message has been received',
         author: ROBOT,
         id: `rob-${Date.now()}-${slug}`,
      }));

    }, 1000);
  }
};


let unsubscribe;

export const initMessagesTrack = (id) => (dispatch) => {

  
};

export const stopMessagesTrack = () => () => {
  unsubscribe(); // при размонтировании - вызывается функция с размонтированием
};