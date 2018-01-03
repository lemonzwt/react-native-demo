import ActionType from '../actions'
const initialState = {
    status: null,
    userLogin:{}
};
export default function Users(state = initialState, action) {
    switch (action.type) {
        case ActionType.USER_LOGIN_INPUT:
        case ActionType.USER_LOGIN_SUCCESS:
        case ActionType.USER_LOGIN_IN:
            return {
                ...state,
                status:action.type,
                userLogin:action.userLogin
            };
            break;
        default:
            return state;
            break;
    }
}