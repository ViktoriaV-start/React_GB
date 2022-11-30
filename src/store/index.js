import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { profileReducer } from './profile/reducer';
import { chatsReducer } from "./chats/reducer";
import { relationReducer } from "./relation/reducer";
import { messagesReducer } from "./messages/reducer";
import { articlesReducer } from './articles/reducer';


const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  relation: relationReducer,
  messages: messagesReducer,
  articles: articlesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer); 


export const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, applyMiddleware(thunk));


export const persistor = persistStore(store);