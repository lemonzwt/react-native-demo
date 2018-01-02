import React,{
    Component
} from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default class TestLightbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            opacity: new Animated.Value(0),
        };
    }
    componentDidMount() {
        Animated.timing(this.state.opacity, {
            duration: 500,
            toValue: 1,
        }).start();
    }
    closeModal = () => {
        Animated.timing(this.state.opacity, {
            duration: 500,
            toValue: 0,
        }).start(Actions.test);
    };
    render(){
        return (
            <Animated.View style={[styles.container,{ opacity: this.state.opacity }]} verticalPercent={0.5} horizontalPercent={0.9}>
                <Text>Demo Lightbox</Text>
                <Text>Allows transparency for background</Text>
                <Button title="Close" onPress={this.closeModal} />
            </Animated.View>
        );
    }
}
