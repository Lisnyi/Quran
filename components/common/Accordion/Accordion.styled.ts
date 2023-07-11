import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 17,
      borderBottomColor: '#1A4545'
    },
    title: {
      fontFamily: 'NotoSans-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: '#FFFFFF'
    },
    dataBox: {
      paddingBottom: 16,
      marginBottom: 17,
      borderBottomColor: '#1A4545',
      borderBottomWidth: 1
    },
    data: {
      fontFamily: 'NotoSans-Regular',
      fontSize: 14,
      color: '#88BBBB'
    }
  });