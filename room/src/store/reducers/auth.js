import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../Shared/utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    modalVisible: false,
    isSignup: true
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, { loading: true, error: null })
        case actionTypes.AUTH_SUCCESS:
            return updateObject(state, {
                loading: false,
                error: null,
                token: action.idToken,
                userId: action.userId,
                modalVisible: false
            })
        case actionTypes.AUTH_FAIL:
            return updateObject(state, { loading: false, error: action.error })
        case actionTypes.AUTH_LOGOUT:
            return updateObject(state, { token: null, userId: null })
        case actionTypes.SIGNUP_ON:
            return updateObject(state, { modalVisible: true, isSignup: true })
        case actionTypes.LOGIN_ON:
            return updateObject(state, { modalVisible: true, isSignup: false })
        case actionTypes.MODAL_OFF:
            return updateObject(state, { modalVisible: false })
        case actionTypes.MODAL_ON:
            return updateObject(state, { modalVisible: true })
        default:
            return state;
    }
}

export default reducer;

