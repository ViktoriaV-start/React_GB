export const ADD_RELATION = 'CHATS::ADD_RELATION';
export const DELETE_RELATION = 'CHATS::DELETE_RELATION';

export const addRelation = (newRelation) => ({
  type: ADD_RELATION,
  payload: newRelation, // можно такую запись, но тогда в редьюсере нужно писать payload
});

export const deleteRelation = (id) => ({
  type: DELETE_RELATION,
  payload: id,
});
