import * as React from 'react';
import { NavLink } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Error } from '../alerts';

export const ChatsMarkup = ({ 
  chats,
  chatName,
  handleChatName,
  chatSlug,
  handleChatSlug,
  addNewChat,
  alert,
  alertText,
  getCurrenUser,
  getCurrenMsg,
  delChat
}) => {
  return (
  
      <div>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

          {chats.map((el) => (
            <NavLink to={`/chats/${el.slug}`} key={el.id}
                     className={({isActive}) => (isActive ? "sidebar__active" : "sidebar__inactive")}>

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={el.alt} src={el.avatar}/>

                </ListItemAvatar>
                <ListItemText
                  primary={el.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{display: 'inline'}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {getCurrenUser(el.id) ? getCurrenUser(el.id) : el.currentUser}

                      </Typography>
                      {" — " + (getCurrenMsg(el.id) ? getCurrenMsg(el.id) : el.currentMsg)}

                    </React.Fragment>
                  }
                />
                
                { el.id === 'chat-1' ||
                  el.id === 'chat-2' ||
                  el.id === 'chat-3' ?
                  '':
                  <button className="chats__delete-wrapper" onClick={(e) => delChat(el.id)} type="submit">
                  <svg onClick={(e) => delChat(el.id)} className="chats__delete" fill="currentColor" height="15"
                       width="15" viewBox="0 0 512 512">
                    <path onClick={(e) => delChat(el.id)}
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                  </svg>
                </button>
                }

              </ListItem>
              <Divider variant="inset" component="li"/>

            </NavLink>

          ))}

          <form className="create-chat">

            <div className="create-chat__header">
              <span>Create your chat</span>
              
              
            </div>
            

            <div className="create-chat__form">

              <span>Chat name</span>
              <input className="create-chat__input"
                     type="text"
                     value={chatName}
                     onChange={handleChatName}
              />

              <span>Chat name shortly</span>
              <input className="create-chat__input"
                // ref={inputRef}
                     type="text"
                     value={chatSlug}
                     onChange={handleChatSlug}
              />
              

              <button onClick={addNewChat} className="chat__btn" type="button">Save</button>
              
            </div>
          </form>
          <div className={"create-chat__alert "+ alert}>
          <Error>{alertText}</Error>
              </div>
        </List>
        
      </div>
  )
}