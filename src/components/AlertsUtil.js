import { Alert, ToastAndroid } from 'react-native';

export default {
  alertDefault(title, message,){
    return Alert.alert(
      title,
      JSON.stringify(message),
      [
        {text: 'OK', onPress: () => {}},
      ],
      {cancelable: false},
    );
  },
  alertDefaultParms(title, message, params){
    return Alert.alert(
      title,
      message + '\n'+params,
      [
        {text: 'OK', onPress: () => {}},
      ],
      {cancelable: false},
    );
  },
  alertError(errorName, menssagem){
    return Alert.alert(
      'Ops',
      'Erro: ' + errorName + '\n' + menssagem,
      [
        {text: 'OK', onPress: () => {}},
      ],
      {cancelable: false},
    );
  },
  toast(title) {
    return ToastAndroid.show(title, ToastAndroid.LONG);
  }
}
