import { FC } from 'react'
import { TouchableOpacity, GestureResponderEvent, Text, ViewStyle } from 'react-native';
import { styles } from './CustomButton.styled'

type Props = {
    onPress: (e: GestureResponderEvent) => void,
    text: string,
    type?: 'primary' | 'secondary'
    style?: ViewStyle
}

export const CustomButton: FC<Props> = ({onPress, text, type='primary', style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.button,
        backgroundColor: type === 'primary' ? '#FFD8A7' : '#0F1E1E',
        ...style
      }}
    >
        <Text
          style={{
            ...styles.text,
            color: type === 'primary' ? '#284D4D' : '#FFD8A7'
          }}
        >
          {text}
        </Text>
    </TouchableOpacity>
  )
}