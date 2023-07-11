import { FC, useState } from 'react'
import { View } from 'react-native'
import { Title } from '../../common'
import { BottomHalfModal } from '../BottomHalfModal'  
import { TranslateOfferModal } from '../TranslateOfferModal'
import { CommentsModal } from '../CommentsModal'
import { BottomHalfModalModalComponent } from '../../BottomHalfModalComponent'
import { useTranslation } from '../../../shared'
import { styles } from './DetailsModal.styled'

type Props = {
    suraOrder: number,
    suraTitle: string,
    ayatOrder: number,
    comments: string[] | null,
    isModalVisible: boolean,
    onClose: () => void,
    addBookmark: () => void
    copy: () => void
    onShare: () => void
}

export const DetailsModal: FC<Props> = ({isModalVisible, onClose, addBookmark, suraOrder, suraTitle, ayatOrder, comments, copy, onShare}) => {

    const [isTranslateOfferModalOpen, setIsTranslateOfferModalOpen] = useState(false)
    const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)
    const translation = useTranslation()

    function openTranslateOfferModal () {
        onClose()
        setIsTranslateOfferModalOpen(true)
    }

    function openCommentsModal () {
        onClose()
        setIsCommentsModalOpen(true)
    }

    return(
        <>
            <BottomHalfModal isModalVisible={isModalVisible} onClose={onClose}>
                <View style={styles.modalContainer}>
                    <View style={styles.contentBox}>
                        <Title style={styles.suraTitle}>
                            Сура {suraOrder}. {suraTitle}
                        </Title>
                        <Title style={styles.ayatTitle}>
                            Аят {ayatOrder}
                        </Title>
                        <View style={styles.componentsBox}>
                            <BottomHalfModalModalComponent style={styles.component} icon='Bookmark' text={translation.saveToBookmarks} onPress={addBookmark}/>
                            <BottomHalfModalModalComponent style={styles.component} icon='Copy' text={translation.copy} onPress={copy}/>
                            <BottomHalfModalModalComponent icon='Share' text={translation.share} onPress={onShare}/>
                        </View>
                        <View style={styles.componentsBox}>
                            <BottomHalfModalModalComponent disabled={isTranslateOfferModalOpen} icon='Translate' text={translation.suggestTranslation} onPress={openTranslateOfferModal}/>
                        </View>
                        <View style={styles.componentsBox}>
                            <BottomHalfModalModalComponent disabled={isCommentsModalOpen} icon='Comment' text={translation.comment} onPress={openCommentsModal}/>
                        </View>
                    </View>
                </View>
            </BottomHalfModal>
            <TranslateOfferModal
                isModalVisible={isTranslateOfferModalOpen}
                onClose={()=>setIsTranslateOfferModalOpen(false)}
                suraOrder={suraOrder}
                suraTitle={suraTitle}
                ayatOrder={ayatOrder}
            />
            <CommentsModal
                isModalVisible={isCommentsModalOpen}
                onClose={()=>setIsCommentsModalOpen(false)}
                suraOrder={suraOrder}
                suraTitle={suraTitle}
                ayatOrder={ayatOrder}
                comments={comments}
            />
        </>
    )
}