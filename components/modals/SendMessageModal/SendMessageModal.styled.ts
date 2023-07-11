import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
        marginHorizontal: 16,
    },
    modalContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#1D3837',
        paddingHorizontal: 16,
        paddingVertical: 32
    },
    title: {
        fontSize: 24,
        lineHeight: 33,
        marginBottom: 16
    },
    content: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 32
    },
    button: {
        width: 170
    }
  });