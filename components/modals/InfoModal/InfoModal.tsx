import { FC } from 'react'
import { View } from 'react-native'
import Modal from "react-native-modal"
import { CustomButton, Title } from '../../common'
import { InfoList } from '../../InfoList'
import type { Sura } from '../../../types'
import { useTranslation } from '../../../shared'
import { styles } from './InfoModal.styled'

type Props = {
    isModalVisible: boolean,
    item: Sura,
    onClose: () => void
    openSura: () => void
}

export const InfoModal: FC<Props> = ({isModalVisible, item, onClose, openSura}) => {

    const { traditionalOrder, ukrainianTitle, arabianTitle, numberOfAyats, numberOfWords, chronologicalOrder, place } = item
    const details = {
        arabianTitle,
        numberOfAyats,
        numberOfWords,
        chronologicalOrder,
        place
    }
    const translation = useTranslation()

    function readSura () {
        openSura()
        onClose()
    }

    return(
        <Modal
            isVisible={isModalVisible}
            backdropOpacity={0.9}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={onClose}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            backdropColor='#0D1A19'
        >
            <View style={styles.modal}>
                <View style={styles.contentBox}>
                    <Title style={styles.title}>
                        {`${traditionalOrder}. ${ukrainianTitle}`}
                    </Title>
                    <InfoList details={details}/>
                </View>
                <View style={styles.buttonsBox}>
                    <CustomButton text={translation.close} onPress={onClose} style={styles.closeButton} type='secondary'/>
                    <CustomButton text={translation.readSurah} onPress={readSura} style={styles.readButton}/>
                </View>
            </View>
        </Modal>
    )
}