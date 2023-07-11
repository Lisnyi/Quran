import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modalContainer: {
        paddingHorizontal: 32,
        paddingTop: 32,
        paddingBottom: 34,
        backgroundColor: '#1D3837',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    contentBox: {
        width: '100%',
        paddingTop: 32,
        borderTopColor: '#FFD8A7',
        borderTopWidth: 1,
    },
    suraTitle: {
        textAlign: 'left',
        marginBottom: 8
    },
    ayatTitle: {
        fontSize: 16,
        lineHeight: 22,
        textAlign: 'left',
        marginBottom: 16
    },
    componentsBox: {
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#1A4545'
    },
    component: {
        marginBottom: 24
    }
  });