import { ROBOT } from "../../config/constants";

export const INIT_MESSAGES = 'MESSAGES::INIT_MESSAGES';
export const ADD_NEW_MESSAGE = 'MESSAGES::ADD_NEW_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';


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

let timeout;

export const addMessageWithReply = (chatId, newMsg, slug) => (dispatch) => {
  dispatch(addNewMessage(chatId, newMsg));


  // let timeout;

  if (newMsg.author !== ROBOT) {

    if (timeout) {
      clearTimeout(timeout); //TODO ПРОВЕРИТЬ
    }

    timeout = setTimeout(() => {
      dispatch(addNewMessage(chatId, {
        text: 'Your message has been received',
         author: ROBOT,
         id: `rob-${Date.now()}-${slug}`,
      }));

    }, 1000);
  }
    

    





}