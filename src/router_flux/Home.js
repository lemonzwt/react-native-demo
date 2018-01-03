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
                <View style={{marginTop:10}}>
                    <Button onPress={Actions.test} title="test" />
                </View>
                <View style={{marginTop:10}}>
                    <Button onPress={Actions.testModal} title="testModal" />
                </View>
                <View style={{marginTop:10}}>
                    <Button onPress={Actions.testLightbox} title="testLightbox" />
                </View>
                <View style={{marginTop:10}}>
                    <Button onPress={()=>Actions.login({title:'login'})} title="redux_demo" />
                </View>
            </View>
        );
    }
}