import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginBottom: 16,
      backgroundColor: '#1D3837'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingBottom: 16,
      marginBottom: 16,
      borderBottomColor: '#1A4545',
      borderBottomWidth: 1,
    },
    headerTitlesBox: {
      alignItems: 'flex-start',
      marginRight: 8
    },
    mainTitle : {
      fontFamily: 'NotoSans-SemiBold',
      fontSize: 14,
      lineHeight: 19,
      textTransform: 'uppercase',
      color: '#FFD8A7',
      marginBottom: 4,
    },
    secondaryTitle : {
      fontFamily: 'NotoSans-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: '#FFD8A7',
    },
    contentBox: {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
    order: {
      fontFamily: 'NotoSans-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: '#FFFFFF',
      marginRight: 16
    },
    textBox: {
      flex: 1
    },
    arabian: {
      fontFamily: 'NotoSans-Regular',
      color: '#FFFFFF',
      marginBottom: 10
    },
    ukrainian: {
      fontFamily: 'NotoSans-Regular',
      color: '#88BBBB'
    },
  });