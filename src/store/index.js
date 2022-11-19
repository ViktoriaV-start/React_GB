import { combineReducers, compose, createStore } from 'redux';

import { profileReducer } from './profile/reducer';
import { chatsReducer } from "./chats/reducer";
import { relationReducer } from "./relation/reducer";
import { messagesReducer } from "./messages/reducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  relation: relationReducer,
  messages: messagesReducer,
});

export const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());


