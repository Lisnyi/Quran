import { FC, useState } from 'react'
import { View } from 'react-native'
import Modal from "react-native-modal";
import { styles } from './TranslateOfferModal.styled'
import { Title, IconButton } from '../../common'
import { SendMessageModal } from '../SendMessageModal';
import { TranslateOfferForm } from '../../forms';
import { useTranslation } from '../../../shared';
import { Icon } from '../../../assets/icons'

type Props = {
    isModalVisible: boolean,
    onClose: () => void,
    suraOrder: number,
    suraTitle: string,
    ayatOrder: number
}

export const TranslateOfferModal: FC<Props> = ({isModalVisible, onClose, suraOrder, suraTitle, ayatOrder}) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    const translation = useTranslation()
    
    return (
        <Modal
            style={styles.modal}
            isVisible={isModalVisible}
            backdropOpacity={0.9}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            backdropColor='#0D1A19'>
            <View style={styles.modalContainer}>
                <View style={styles.headerBox}>
                    <View style={styles.mainTitleBox}>
                        <Title>
                            {translation.suggestTranslation}
                        </Title>
                        <IconButton onPress={onClose}>
                            <Icon name='Close' color='#FFD8A7' size={24}/>
                        </IconButton>
                    </View>
                    <Title style={styles.suraTitle}>
                        Сура {suraOrder}. {suraTitle}
                    </Title>
                    <Title style={styles.ayatTitle}>
                        Аят {ayatOrder}
                    </Title>
                </View>
                <TranslateOfferForm openModal={()=>setModalVisible(true)}/>
            </View>
            <SendMessageModal isModalVisible={modalVisible} onClose={()=>setModalVisible(false)}/>
        </Modal>
    )
}