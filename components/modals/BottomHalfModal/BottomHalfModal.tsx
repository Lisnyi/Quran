import { FC, ReactNode } from 'react'
import Modal from "react-native-modal"
import { styles } from './BottomHalfModal.styled'

type Props = {
    isModalVisible: boolean,
    onClose: () => void,
    children: ReactNode
}

export const BottomHalfModal: FC<Props> = ({isModalVisible, onClose, children}) => {

    return(
        <Modal
            style={styles.modal}
            isVisible={isModalVisible}
            backdropOpacity={0.9}
            animationIn='slideInUp'
            animationOut='slideOutDown'
            backdropColor='#0D1A19'
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            swipeDirection='down'
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
        >
            {children}
        </Modal>
    )
}