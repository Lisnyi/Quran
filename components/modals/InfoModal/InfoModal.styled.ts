import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
        maxWidth: 343,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    contentBox: {
        width: '100%',
        paddingVertical: 24,
        paddingHorizontal: 16,
        backgroundColor: '#1D3837'
    },
    buttonsBox: {
        flexDirection: 'row',
        width: '100%',
        paddingTop: 16
    },
    title: {
        fontSize: 20,
        lineHeight: 27,
        paddingVertical: 16,
        borderTopColor: '#DDC6A3',
        borderTopWidth: 1,
        borderBottomColor: '#DDC6A3',
        borderBottomWidth: 1,
        marginHorizontal: 12,
        marginBottom: 24
    },
    closeButton: {
        flex: 1,
        marginRight: 16,
    },
    readButton: {
        flex: 1
    }
  });