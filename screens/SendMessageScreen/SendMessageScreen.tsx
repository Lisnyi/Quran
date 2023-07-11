import { FC, useState } from 'react'
import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SendMessageForm, Container, Section, Title, IconButton, SendMessageModal } from '../../components'
import { Icon } from '../../assets/icons'
import { useTranslation } from '../../shared';
import { styles } from './SendMessageScreen.styled'

export const SendMessageScreen: FC = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const translation = useTranslation()
  const navigation = useNavigation();

  return (
    <Container>
      <Section>
          <IconButton onPress={navigation.goBack} style={styles.goBackButton}>
            <Icon name='CaretLeft' size={24} color='#FFD8A7'/>
          </IconButton>
          <Title style={styles.title}>
            {translation.somethingIsNoWorking}
          </Title>
          <Text style={styles.discription}>
            {translation.explainWhatHappened}
          </Text>
          <SendMessageForm openModal={()=>setModalVisible(true)}/>
          <SendMessageModal isModalVisible={modalVisible} onClose={()=>setModalVisible(false)}/>
      </Section>
    </Container>  
  )
}