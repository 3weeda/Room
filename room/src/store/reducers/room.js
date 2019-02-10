import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Shared/utility';

const initialState = {
    elementZoomed: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ZOOM_IN:
        return updateObject(state, { elementZoomed: true })
        case actionTypes.ZOOM_OUT:
        return updateObject(state, { elementZoomed: false })
        default:
            return state;
    }
}

export default reducer;