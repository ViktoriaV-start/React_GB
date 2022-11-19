export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat, // можно такую запись, но тогда в редьюсере нужно писать payload
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

