import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
        maxWidth: 343,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentBox: {
        width: '100%',
        paddingVertical: 32,
        backgroundColor: '#1D3837'
    },
    textBox:{
        paddingTop: 24,
        borderTopColor: '#FFD8A7',
        borderTopWidth: 1,
        paddingHorizontal: 32
    },
    buttonsBox: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 16
    },
    mainText: {
        fontFamily: 'NotoSans-SemiBold',
        fontSize: 24,
        lineHeight: 33,
        textAlign: 'center',
        color: '#FFD8A7',
        marginBottom: 16
    },
    secondaryText:{
        fontFamily: 'NotoSans-Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    closeButton: {
        flex: 1,
        marginRight: 16,
    },
    deleteButton: {
        flex: 1
    }
  });