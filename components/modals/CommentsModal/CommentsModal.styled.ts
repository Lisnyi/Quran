import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#1D3837',
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    mainContentBox: {
        flex: 1,
        marginBottom: 25
    },
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 24,
        borderBottomColor: '#FFD8A7',
        borderBottomWidth: 1,
        marginBottom: 24
    },
    ayatTitle : {
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        textAlign: 'left',
        marginBottom: 16
    },
    commentsListBox: {
        flex: 1
    },
    comment: {
        fontFamily: 'NotoSans-Regular',
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
    },
  });