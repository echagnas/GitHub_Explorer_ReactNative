
import * as actions from '../actions/ActionTypes'

const initialState = {
  userName: "",
  userInfos: {},
  userRepositories: []
};

export const mainReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.UPDATE_USERNAME:
      return { ...state, userName: payload.value };
    case actions.UPDATE_USERINFOS:
      return { ...state, userInfos: payload.value };
    case actions.UPDATE_USERREPOS:
      return { ...state, userRepositories: payload.value };
    default:
      return state;
  }
};