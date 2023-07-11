import { FC } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../assets/icons'
import { IconButton, Title } from '../common'
import { styles } from './Header.styled'

type Props = {
  title: string,
}

export const Header: FC<Props> = ({title}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <IconButton onPress={navigation.goBack}>
          <Icon name='CaretLeft' size={24} color='#FFD8A7'/>
        </IconButton>
        <Title style={styles.title}>
          {title}
        </Title>
    </View>
  )
}