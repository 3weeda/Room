import * as actionTypes from '../actions/actionTypes';

const initialState = {
    nightMode: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NIGHT_MODE:
            return {
                ...state,
                nightMode: !state.nightMode
            }
        default:
            return state;
    }
}

export default reducer;