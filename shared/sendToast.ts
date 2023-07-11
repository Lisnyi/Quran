import { Alert, ToastAndroid, Platform } from 'react-native';

export function sendToast (msg: string) : void {
    if (Platform.OS === 'android') {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
      } else {
        Alert.alert(msg, undefined, undefined, {cancelable: true});
      }
}