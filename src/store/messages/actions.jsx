export const INIT_MESSAGES = 'MESSAGES::INIT_MESSAGES';
export const ADD_NEW_MESSAGE = 'MESSAGES::ADD_NEW_MESSAGE';

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