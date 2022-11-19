export const ROBOT = "Robot";

export const INITIAL_CHATS = [
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
    id: 'chat-3',
    name: "Let's chat about art",
    slug: "art",
    alt: 'A',
    avatar: '/React_GB/img/art.jpg',
    currentUser: 'Sandra Adams',
    currentMsg: " Do you have Paris recommendations? Have you ever…"
  },
];


export const INITIAL_MESSAGES = INITIAL_CHATS.reduce((acc, chat) => {
  acc[chat.id] = [];
  return acc;
}, {});

export const SLUG_ID = INITIAL_CHATS.reduce((acc, chat) => {
  acc[chat.slug] = chat.id;
  return acc;
}, {});

