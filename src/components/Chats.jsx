
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { NavLink} from 'react-router-dom';


export const Chats = ({children}) => {

    const allChats = [
        {
            id: 1,
            name: "Let's chat about music",
            slug: "music",
            alt: 'M',
            avatar: '/React_GB/img/music.jpg',
            currentUser: 'Ali Connors',
            currentMsg: " I'll be in your neighborhood doing errands this…"
        },
        {
            id: 2,
            name: "Let's chat about food",
            slug: "food",
            alt: 'F',
            avatar: '/React_GB/img/food.jpg',
            currentUser: 'Jennifer',
            currentMsg: "  Wish I could come, but I'm out of town this…"
        },
        {
            id: 3,
            name: "Let's chat about art",
            slug: "art",
            alt: 'A',
            avatar: '/React_GB/img/art.jpg',
            currentUser: 'Sandra Adams',
            currentMsg: " Do you have Paris recommendations? Have you ever…"
        },

    ]


    return (
        <>
        <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            
            {allChats.map((el) => 
            <NavLink to={`/chat/${el.slug}`} key={el.id}
            className={({ isActive }) => (isActive ? "sidebar__active" : "sidebar__inactive")}>
            
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={el.alt} src={el.avatar} />

            </ListItemAvatar>
            <ListItemText
                primary={el.name}
                secondary={
                    <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {el.currentUser}
                        </Typography>
                        {" — " + el.currentMsg}
                    </React.Fragment>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
            
            
    </NavLink>
            )}

        </List>

    </div>
    
    </>
    )
}
