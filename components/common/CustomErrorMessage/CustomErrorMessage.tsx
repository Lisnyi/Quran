import { FC } from 'react'
import { View, Text } from 'react-native'
import { styles } from './CustomErrorMessage.styled'

type Props = {
    message: string
}

export const CustomErrorMessage: FC <Props> = ({message}) => {
  return (
    <View style={styles.box}>
        <Text style={styles.message}>
            {message}
        </Text>
    </View>
  )
}