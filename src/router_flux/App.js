import React, {
    Component
} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Platform
} from 'react-native'
import {
    Router,
    Scene,
    Modal,
    Lightbox
} from 'react-native-router-flux'
import {
    Provider
} from 'react-redux'
import configureStore from './store/index'
import TabIcon from './TabIcon'
import Me from './Me'
import Home from './Home'
import Message from './Message'
import Test from './Test'
import TestModal from './TestModal'
import TestLightbox from './TestLightbox'
import Test1 from './Test1'
import Login from './Login'
let store = configureStore();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    navigationBar: {
        backgroundColor: '#333333'
    },
    tabBarContainer: {}
});
const getSceneStyle = () => ({
    backgroundColor: '#efeff4',
    shadowOpacity: 1,
    shadowRadius: 3,
});
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router getSceneStyle={getSceneStyle}>
                    <Scene key="modal" component={Modal} hideNavBar>
                        <Lightbox>
                            <Scene key="root" hideNavBar>
                                <Scene key="login" hideNavBar={false} component={Login}/>
                                <Scene key="test" title="test" hideNavBar={false} component={Test}/>
                                <Scene key="home" type='replace' style={styles.tabBarContainer} initial
                                       tabBarPosition='bottom' tabs>
                                    <Scene hideBackImage key="index" title="主页" component={Home}
                                           icon={TabIcon}
                                           Image={require('../image/message.png')}
                                           selectedImage={require('../image/message_selected.png')}/>
                                    <Scene hideBackImage key="message" component={Message} title="消息"
                                           icon={TabIcon}
                                           Image={require('../image/message.png')}
                                           selectedImage={require('../image/message_selected.png')}/>
                                    <Scene hideBackImage key="me" component={Me} title="我"
                                           icon={TabIcon}
                                           Image={require('../image/message.png')}
                                           selectedImage={require('../image/message_selected.png')}/>
                                </Scene>
                            </Scene>
                            <Scene key="testLightbox" component={TestLightbox}/>
                        </Lightbox>
                        <Scene key="testModal" component={TestModal}/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}