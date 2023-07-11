import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  categoryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  marker:{
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    marginRight: 8
  },
  category: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF'
  },
  value: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#88BBBB'
  }
});