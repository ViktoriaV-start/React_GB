import {INITIAL_MESSAGES} from "../../config/constants";
import {ADD_NEW_MESSAGE, DELETE_MESSAGE, INIT_MESSAGES, UPDATE_MESSAGES, UPDATE_MSGS} from "./actions";


const initialState = INITIAL_MESSAGES;

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_MESSAGES: {
      return {...state, [payload]: []};
    }
    case ADD_NEW_MESSAGE: {
      return {...state, [payload.chatId]: [...state[payload.chatId], payload.newMsg]};
      //TODO записать потом в лекцию синтаксис для всех вариантов в редьюсерах
    }
    case DELETE_MESSAGE: {
      return {...state, [payload.chatId]: [...state[payload.chatId].filter(({ id }) => id !== payload.msgId)]};
      //TODO записать потом в лекцию синтаксис для всех вариантов в редьюсерах
    }
    case UPDATE_MESSAGES: {
      //console.log(payload);
      return {...state, [payload.chatId]: [...payload.messages]};
      //TODO записать потом в лекцию синтаксис для всех вариантов в редьюсерах
    }
    case UPDATE_MSGS: {
     
      return {...payload};
      //TODO записать потом в лекцию синтаксис для всех вариантов в редьюсерах
    }
    default:
      return state;
  }
};
