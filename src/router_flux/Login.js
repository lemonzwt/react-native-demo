import React, {
    Component
} from 'react'
import {
    View
} from 'react-native'
import {
    Actions
} from 'react-native-router-flux'
import Button from 'antd-mobile/lib/button';
import InputItem from 'antd-mobile/lib/input-item';
import List from 'antd-mobile/lib/list';
import {connect} from 'react-redux'
import ActionTypes from './actions'
import LoginCommand from './actions/LoginCommand'
import Toast from 'antd-mobile/lib/toast'

class Login extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.status === ActionTypes.USER_LOGIN_INPUT || nextProps.status === ActionTypes.USER_LOGIN_IN)
            return true;
        else if (nextProps.status === ActionTypes.USER_LOGIN_SUCCESS) {
            Toast.success('login success !!!', 1);
            Actions.pop();
        }
    }

    userInputLoginName(value) {
        this.props.dispatch({
            type: ActionTypes.USER_LOGIN_INPUT,
            userLogin: {
                loginName: value,
                password: this.props.userLogin.password
            }
        });
    }

    userInputPassword(value) {
        this.props.dispatch({
            type: ActionTypes.USER_LOGIN_INPUT,
            userLogin: {
                loginName: this.props.userLogin.loginName,
                password: value
            }
        });
    }

    userLogin() {
        if (this.props.status !== ActionTypes.USER_LOGIN_IN)
            this.props.dispatch(LoginCommand.userLogin(this.props.userLogin));
    }

    render() {
        return (
            <View>
                <List style={{marginTop: 10}}>
                    <InputItem
                        value={this.props.userLogin.loginName}
                        onChangeText={(value) => this.userInputLoginName(value)}
                        placeholder="loginName"
                    >
                    </InputItem>
                    <InputItem
                        onChangeText={(value) => this.userInputPassword(value)}
                        value={this.props.userLogin.password}
                        placeholder="password"
                    >
                    </InputItem>
                </List>
                <Button style={{margin: 10}} onClick={() => this.userLogin()} type="primary"
                        loading={this.props.status === ActionTypes.USER_LOGIN_IN}>login</Button>
            </View>
        );
    }
}

function select(store) {
    return {
        userLogin: store.default.userStore.userLogin,
        status: store.default.userStore.status,
    }
}

export default connect(select)(Login);
