import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    modalContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#1D3837',
        paddingHorizontal: 16,
        paddingVertical: 24
    },
    headerBox: {
        paddingBottom: 24,
        borderBottomColor: '#FFD8A7',
        borderBottomWidth: 1,
        marginBottom: 24
    },
    mainTitleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24
    },
    suraTitle: {
        color: '#FFFFFF',
        textAlign: 'left',
        marginBottom: 8
    },
    ayatTitle : {
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        textAlign: 'left',
    },
  });