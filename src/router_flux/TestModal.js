import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default TestModal = () => (
    <View>
        <Text>Error Modal</Text>
        <Text>Slides up from the bottom, and covers the entire screen with no transparency</Text>
        <Button title="Close" onPress={Actions.pop} />
    </View>
);
