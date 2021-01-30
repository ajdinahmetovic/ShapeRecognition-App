import {ACTIONS} from '../actions';

export const getToken = () => (dispatch) => {
  dispatch({action: ACTIONS.AUTH_TOKEN_START, payload: null});
};
