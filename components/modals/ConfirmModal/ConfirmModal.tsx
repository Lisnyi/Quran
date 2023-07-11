import { FC } from 'react'
import { View, Text } from 'react-native'
import Modal from "react-native-modal"
import { CustomButton } from '../../common'
import { useTranslation } from '../../../shared'
import { styles } from './ConfirmModal.styled'

type Props = {
    isModalVisible: boolean,
    onClose: () => void
    deleteBookmark: () => void
}

export const ConfirmModal: FC<Props> = ({isModalVisible, onClose, deleteBookmark}) => {

    const translation = useTranslation()

    function onDelete () {
        deleteBookmark()
        onClose()
    } 

    return(
        <Modal
            isVisible={isModalVisible}
            backdropOpacity={0.9}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            backdropColor='#0D1A19'
        >
            <View style={styles.modal}>
                <View style={styles.contentBox}>
                    <View style={styles.textBox}>
                        <Text style={styles.mainText}>{translation.confirmDeletingFromFavorite}</Text>
                        <Text style={styles.secondaryText}>{translation.youCanAgainAddToFavorite}</Text>
                    </View>
                </View>
                <View style={styles.buttonsBox}>
                    <CustomButton text={translation.close} onPress={onClose} style={styles.closeButton} type='secondary'/>
                    <CustomButton text={translation.delete} onPress={onDelete} style={styles.deleteButton}/>
                </View>
            </View>
        </Modal>
    )
}