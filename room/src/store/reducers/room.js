import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Shared/utility';

const initialState = {
    clock: false,
    computer: false,
    vase: false,
    kandle: false,
    shelfBooks: false,
    cactus: false,
    speaker: false,
    deskBooks: false,
    plant: false,
    window: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CLOCK_ZOOM_IN: return updateObject(state, { clock: true })
        case actionTypes.COMPUTER_ZOOM_IN: return updateObject(state, { computer: true })
        case actionTypes.VASE_ZOOM_IN: return updateObject(state, { vase: true })
        case actionTypes.KANDLE_ZOOM_IN: return updateObject(state, { kandle: true })
        case actionTypes.SHELFBOOKS_ZOOM_IN: return updateObject(state, { shelfBooks: true })
        case actionTypes.CACTUS_ZOOM_IN: return updateObject(state, { cactus: true })
        case actionTypes.SPEAKER_ZOOM_IN: return updateObject(state, { speaker: true })
        case actionTypes.DESKBOOKS_ZOOM_IN: return updateObject(state, { deskBooks: true })
        case actionTypes.PLANT_ZOOM_IN: return updateObject(state, { plant: true })
        case actionTypes.WINDOW_ZOOM_IN: return updateObject(state, { window: true })
        case actionTypes.ZOOM_OUT: return updateObject(initialState)
        default: return state;
    }
}

export default reducer;