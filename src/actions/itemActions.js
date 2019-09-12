import constants from '../constants';

export const fetchStarted = () => ({
    type: constants.FETCH_STARTED,
});

export const fetchError = e => ({
    type: constants.FETCH_ERROR,
    payload: e,
});

export const fetchCompleted = payload => ({
    type: constants.FETCH_COMPLETED,
    payload,
});

export const fetchItem = () => async (dispatch) => {
    dispatch(fetchStarted());
    try {
        const payload = {ok: true};
        dispatch(fetchCompleted(payload));
    } catch (e) {
        dispatch(fetchError(e));
    }
};

export default fetchItem;