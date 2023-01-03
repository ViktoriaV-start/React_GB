import { CHANGE_NAME, CHANGE_EMAIL, TOGGLE_PROFILE,  } from "./actions";

const initialState = {
    name: 'NewName',
    email: 'Email',
    visible: true,

};
 
export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_PROFILE: {

            return {
                ...state,
                visible: action.visible,
            }
        }
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.name,
            }
        }
        case CHANGE_EMAIL: {
          return {
              ...state,
              email: action.email,
          }
      }
        default:
            return state;
    }
};

