import { ReactNode, FC} from 'react'
import { Text, TextStyle } from 'react-native';
import { styles } from './Title.styled'

type Props = {
  children?: ReactNode,
  style?: TextStyle
}

export const Title: FC<Props> = ({children, style}) => {
  return (
      <Text style={{...styles.text, ...style}}>
        {children}
      </Text>

  )
}