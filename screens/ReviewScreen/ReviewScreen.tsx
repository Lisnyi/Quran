import { FC, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ReviewForm, Container, Section, Title, IconButton, SendMessageModal } from '../../components'
import { Icon } from '../../assets/icons'
import { useTranslation } from '../../shared';
import { styles } from './ReviewScreen.styled'

export const ReviewScreen: FC = () => {

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
            {translation.writeYourReview}
          </Title>
          <ReviewForm openModal={()=>setModalVisible(true)}/>
          <SendMessageModal isModalVisible={modalVisible} onClose={()=>setModalVisible(false)}/>
      </Section>
    </Container>  
  )
}