import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import App from './src/App'
import TabDemo from './src/TabNavigatorDemo'
import DrawerDemo from './src/DrawerNavigatorDemo'
import FluxDemo from './src/router_flux/App'

AppRegistry.registerComponent('reactNativeDemo', () => FluxDemo);
