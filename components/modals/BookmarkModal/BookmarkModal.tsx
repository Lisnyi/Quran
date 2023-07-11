import { FC, useState } from 'react'
import { View } from 'react-native'
import { BottomHalfModal } from '../BottomHalfModal'  
import { BottomHalfModalModalComponent } from '../../BottomHalfModalComponent'
import { ConfirmModal } from '../ConfirmModal'
import { useTranslation } from '../../../shared'
import { styles } from './BookmarkModal.styled'

type Props = {
    isModalVisible: boolean,
    onClose: () => void,
    deleteBookmark: () => void
}

export const BookmarkModal: FC<Props> = ({isModalVisible, onClose, deleteBookmark}) => {

    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const translation = useTranslation()
    
    function confirmDeleting () {
        onClose()
        setConfirmModalVisible(true)
    }

    return(
        <>
            <BottomHalfModal isModalVisible={isModalVisible} onClose={onClose}>
                <View style={styles.modalContainer}>
                    <View style={styles.contentBox}>
                        <BottomHalfModalModalComponent icon='Broom' text={translation.removeFromFavorite} onPress={confirmDeleting}/>
                    </View>
                </View>
            </BottomHalfModal>
            <ConfirmModal isModalVisible={confirmModalVisible} onClose={()=>setConfirmModalVisible(false)} deleteBookmark={deleteBookmark}/>
        </>
    )
}