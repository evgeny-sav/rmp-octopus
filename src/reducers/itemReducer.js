import constants from '../constants';


const initialState = {
  ok: false,
};

const actions = {
  [constants.FETCH_STARTED]: (state) => state,
  [constants.FETCH_ERROR]: (state, action) => { throw Error(action.payload); },
  [constants.FETCH_COMPLETED]: (state, action) => action.payload,
};

const itemReducer = (state = initialState, action) => (actions[action.type] ? actions[action.type](state, action) : state);

export default itemReducer;
