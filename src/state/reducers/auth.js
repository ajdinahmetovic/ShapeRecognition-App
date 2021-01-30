import {ACTIONS} from '../actions';

const initialState = {
  token: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.AUTH_TOKEN_START:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case ACTIONS.AUTH_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
