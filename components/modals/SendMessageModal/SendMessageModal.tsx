import { FC } from 'react'
import { View, Text } from 'react-native'
import Modal from "react-native-modal";
import { styles } from './SendMessageModal.styled'
import { Title } from '../../common/Title'
import { useTranslation } from '../../../shared';
import { CustomButton } from '../../common/button'

type Props = {
    isModalVisible: boolean,
    onClose: () => void
}

export const SendMessageModal: FC<Props> = ({isModalVisible, onClose}) => {

    const translation = useTranslation()

    return (
        <Modal
            style={styles.modal}
            isVisible={isModalVisible}
            backdropOpacity={1}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            backdropColor='#125a55'>
            <View style={styles.modalContainer}>
                <Title style={styles.title}>
                    {translation.sentSuccessfully}
                </Title>
                <Text style={styles.content}>
                    {translation.weWillImmediatelySendNotification}
                </Text>
                <CustomButton text={translation.close} onPress={onClose}  style={styles.button}/>
            </View>
        </Modal>
    )
}