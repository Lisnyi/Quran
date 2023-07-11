import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: '#1A4545',
    borderBottomWidth: 1
  },
  contentBox: {
    flex: 1,
    marginRight: 16
  },
  order: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    marginRight: 16
  },
  arabianText: {
    textAlign: 'left',
    fontFamily: 'NotoSans-Regular',
    color: '#FFFFFF',
    marginBottom: 10
  },
  ukrainianText: {
    textAlign: 'left',
    fontFamily: 'NotoSans-Regular',
    color: '#88BBBB'
  },
  videoButton: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: '#1A4545',
    borderBottomWidth: 1
  },
});