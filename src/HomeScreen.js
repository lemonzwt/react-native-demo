import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import Button from 'antd-mobile/lib/button';
// import codePush from 'react-native-code-push'
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',//在导航中显示的标题内容
    };
    componentDidMount(){
        // codePush.checkForUpdate('').then((update) => {
        //     if (!update) {
        //         Alert.alert("提示", "已是最新版本--", [
        //             {
        //                 text: "Ok", onPress: () => {
        //                     console.log("已是最新版本");
        //                 }
        //             }
        //         ]);
        //     } else {
        //         codePush.sync({
        //                 deploymentKey: '',
        //                 updateDialog: {
        //                     optionalIgnoreButtonLabel: '稍后',
        //                     optionalInstallButtonLabel: '立即更新',
        //                     optionalUpdateMessage: '有新版本了，是否更新？',
        //                     title: '更新提示'
        //                 },
        //                 installMode: codePush.InstallMode.IMMEDIATE,
        //
        //             },
        //             (status) => {
        //                 switch (status) {
        //                     case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        //                         console.log("DOWNLOADING_PACKAGE");
        //                         break;
        //                     case codePush.SyncStatus.INSTALLING_UPDATE:
        //                         console.log(" INSTALLING_UPDATE");
        //                         break;
        //                 }
        //             },
        //             (progress) => {
        //                 console.log(progress.receivedBytes + " of " + progress.totalBytes + " received.");
        //             }
        //         );
        //     }
        // });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'111'})}
                    title="Chat with Lucy"
                />
                <Image source={require('./image/img_80.png')} />
                <Text>{'dsds'}</Text>
            </View>
        );
    }
}