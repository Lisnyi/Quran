import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  text: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF'
  },
  buttonsBox: {
    flexDirection: 'row'
  },
  infoButton: {
    marginRight: 16
  }
});