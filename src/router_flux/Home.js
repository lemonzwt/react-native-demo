import React,{
    Component
} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import {
    Actions
} from 'react-native-router-flux'
export default class Home extends Component{
    render(){
        return (
            <View>
                <Text>Home</Text>
                <Button onPress={Actions.test} title="test" />
                <Button onPress={Actions.testModal} title="testModal" />
                <Button onPress={Actions.testLightbox} title="testLightbox" />
            </View>
        );
    }
}