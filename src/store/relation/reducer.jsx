import { ADD_RELATION, DELETE_RELATION } from "./actions";
import {SLUG_ID} from "../../config/constants";


const initialState = SLUG_ID;
 
export const relationReducer = (state = initialState, { payload, type }) => {
    switch(type) {
        case ADD_RELATION: {
            return {...state, ...payload};
        }
        case DELETE_RELATION: {
            delete state[payload];
            return state;
        }
        default:
            return state;
    }
};

