import {INITIAL_MESSAGES} from "../../config/constants";
import {ADD_NEW_MESSAGE, INIT_MESSAGES} from "./actions";


const initialState = INITIAL_MESSAGES;

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT_MESSAGES: {
      return {...state, [payload]: []};
    }
    case ADD_NEW_MESSAGE: {
      console.log(payload);
      return {...state, [payload.chatId]: [...state[payload.chatId], payload.newMsg]};
      //TODO записать потом в лекцию синтаксис для всех вариантов в редьюсерах
    }
    default:
      return state;
  }
};