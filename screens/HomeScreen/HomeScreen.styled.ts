import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    navigation: {
        width: '100%',
        minHeight: 33,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 16,
        borderBottomColor: '#DDC6A3',
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 24, 
        lineHeight: 33
    },
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });