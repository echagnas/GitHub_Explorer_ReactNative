import * as types from "./ActionTypes";

export const setUserName = newValue => ({
    type: types.UPDATE_USERNAME,
    payload: {
      value: newValue
    }
  });

  export const setUserInfos = newValue => ({
    type: types.UPDATE_USERINFOS,
    payload: {
      value: newValue
    }
  });

  export const setUserRepos = newValue => ({
    type: types.UPDATE_USERREPOS,
    payload: {
      value: newValue
    }
  });