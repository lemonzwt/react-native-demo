import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: `Chat with ${navigation.state.params.user}`,
        gestureResponseDistance:{horizontal:300}
    });
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}