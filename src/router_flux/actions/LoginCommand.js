import ActionTypes from '.'

export default class LoginCommand {
    static userLogin(userLogin) {
        return (dispatch) => {
            dispatch({
                type: ActionTypes.USER_LOGIN_IN,
                userLogin: userLogin
            });
            setTimeout(() => {
                dispatch({
                    type: ActionTypes.USER_LOGIN_SUCCESS,
                    userLogin: userLogin
                });
            }, 2000);
        }
    }
}