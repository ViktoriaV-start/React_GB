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
    }
    case DELETE_MESSAGE: {
      return {...state, [payload.chatId]: [...state[payload.chatId].filter(({ id }) => id !== payload.msgId)]};
    }
    case UPDATE_MESSAGES: {
      return {...state, [payload.chatId]: [...payload.messages]};
    }
    case UPDATE_MSGS: {
     
      return {...payload};
    }
    default:
      return state;
  }
};

