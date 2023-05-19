import { onValue } from "firebase/database";
import { relationsRef } from "../../services/firebase";

export const ADD_RELATION = 'RELATION::ADD_RELATION';
export const DELETE_RELATION = 'RELATION::DELETE_RELATION';
export const UPDATE_RELATIONS = 'RELATION::UPDATE_RELATIONS';

export const addRelation = (newRelation) => ({
  type: ADD_RELATION,
  payload: newRelation, // можно такую запись, но тогда в редьюсере нужно писать payload
});

export const deleteRelation = (slug) => ({
  type: DELETE_RELATION,
  payload: slug,
});

export const updateRelations = (relations) => ({
  type: UPDATE_RELATIONS,
  payload: relations,
});

let unscribe;

export const initRelationsTrack = () => (dispatch) => {

  const unsubscribeRelations = onValue(relationsRef, (snapshot) => {
   
    dispatch(updateRelations(snapshot.val() || {} ));
   
  });

  unscribe = () => { // переприсваиваем в unscribe функции для отписки от отслеживания событий, здесь не вызываем
    unsubscribeRelations();
    
  };
};

export const stopRelationsTrack = () => () => {
  unscribe(); // при размонтировании - вызывается функция с размонтированием
};
