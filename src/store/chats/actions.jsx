import { onValue } from "firebase/database";
import { chatsRef } from "../../services/firebase";

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const UPDATE_CHATS = 'CHATS::UPDATE_CHATS';

export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat, // можно такую запись, но тогда в редьюсере нужно писать payload
});

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const updateChats = (chatsArr) => ({
  type: UPDATE_CHATS,
  payload: chatsArr,
});


let unscribe;

export const initChatsTrack = () => (dispatch) => {

  const unsubscribeChats = onValue(chatsRef, (snapshot) => {
    
//console.log("*****", Object.values(snapshot.val()))

    dispatch(updateChats(Object.values(snapshot.val() || {} )));
   
  });

  unscribe = () => { // переприсваиваем в unscribe функции для отписки от отслеживания событий, здесь не вызываем
    unsubscribeChats();
    
  };
};

export const stopChatsTrack = () => () => {
  unscribe(); // при размонтировании - вызывается функция с размонтированием
};
