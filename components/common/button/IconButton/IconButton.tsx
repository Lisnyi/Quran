import { FC, ReactNode } from 'react'
import { TouchableOpacity, GestureResponderEvent, ViewStyle } from 'react-native';
import { styles } from './IconButton.styled'

type Props = {
    onPress: (e: GestureResponderEvent) => void,
    children: ReactNode,
    style?: ViewStyle,
    disabled?: boolean
}

export const IconButton: FC<Props> = ({onPress, children, style, disabled=false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{
        ...styles.button, 
        ...style
      }}>
        {children}
    </TouchableOpacity>
  )
}