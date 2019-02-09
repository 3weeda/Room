import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Shared/utility';

const initialState = {
    nightMode: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NIGHT_MODE:
            return updateObject(state, { nightMode: !state.nightMode })
        default:
            return state;
    }
}

export default reducer;