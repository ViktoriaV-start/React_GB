import { ADD_CHAT, DELETE_CHAT } from "./actions";
import { INITIAL_CHATS } from "../../config/constants";

const initialState = INITIAL_CHATS;
 
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
        default:
            return state;
    }
};

