import { ReactNode, FC} from 'react'
import { View } from 'react-native';
import { styles } from './Container.styled'

type Props = {
  children?: ReactNode
}

export const Container: FC<Props> = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}