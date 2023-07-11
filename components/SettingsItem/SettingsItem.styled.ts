import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
      height: 40,
      flexDirection: 'row',
      marginBottom: 16
    },
    iconBox: {
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1D3837',
      borderRadius: 8,
      marginRight: 16
    },
    textBox: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: 16
    },
    text: {
      fontFamily: 'NotoSans-Regular',
      fontSize: 14,
      color: '#FFFFFF'
    },
    pickedOptionBox: {
      flex: 1,
      maxWidth: 100,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    pickedOption: {
      fontFamily: 'NotoSans-Regular',
      fontSize: 14,
      color: '#88BBBB'
    },
    arrowBox: {
      width: 24,
      alignItems: 'center',
      justifyContent: 'center'
    }
  });