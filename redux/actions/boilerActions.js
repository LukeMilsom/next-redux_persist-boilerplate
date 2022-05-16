import * as t from '../types';

//========API======>
export const setSomething = () => async (dispatch) => {
  try {
    //try
  } catch (e) {
    //catch
  }
};

//========LOCAL======>

export const setBoilerAction = (payload) => (dispatch) => {
  dispatch({
    type: t.SET_BOILERPLATE_ACTION,
    payload: payload,
  });
};
