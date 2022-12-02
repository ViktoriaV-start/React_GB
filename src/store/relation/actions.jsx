export const ADD_RELATION = 'RELATION::ADD_RELATION';
export const DELETE_RELATION = 'RELATION::DELETE_RELATION';

export const addRelation = (newRelation) => ({
  type: ADD_RELATION,
  payload: newRelation, // можно такую запись, но тогда в редьюсере нужно писать payload
});

export const deleteRelation = (slug) => ({
  type: DELETE_RELATION,
  payload: slug,
});
