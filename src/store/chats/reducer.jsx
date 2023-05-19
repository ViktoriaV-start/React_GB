import { ADD_CHAT, DELETE_CHAT, UPDATE_CHATS } from "./actions";

const initialState = [];
 
export const chatsReducer = (state = initialState, { payload, type }) => {
    switch(type) {
        case ADD_CHAT: {
            return [...state, payload];
            // ВНИМАНИЕ! ЗДЕСЬ ПИШЕМ payload - это то, что приходит из action^
            // также обрати внимание, что здесь [квадратные скобки] - это добавление в имеющийся массив еще одного объекта
        }
        case DELETE_CHAT: {
            return state.filter(({ id }) => id !== payload);
        }
        case UPDATE_CHATS: {
          return [...payload];
          
      }
        default:
            return state;
    }
};

