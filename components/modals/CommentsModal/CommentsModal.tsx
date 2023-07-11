import { FC } from 'react'
import { View, Text } from 'react-native'
import Modal from "react-native-modal";
import { styles } from './CommentsModal.styled'
import { Title, IconButton, CustomButton } from '../../common'
import { CommentsList } from '../../CommentsList'
import { Icon } from '../../../assets/icons'
import { useTranslation } from '../../../shared'

type Props = {
    isModalVisible: boolean,
    onClose: () => void,
    suraOrder: number,
    suraTitle: string,
    ayatOrder: number,
    comments: string[] | null
}

export const CommentsModal: FC<Props> = ({isModalVisible, onClose, suraOrder, suraTitle, ayatOrder, comments}) => {
    
    const translation = useTranslation()

    return (
        <Modal
            style={styles.modal}
            isVisible={isModalVisible}
            backdropOpacity={0.9}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={onClose}
            propagateSwipe={true}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            backdropColor='#0D1A19'>
            <View style={styles.modalContainer}>
                <View style={styles.mainContentBox}>
                    <View style={styles.headerBox}>
                        <Title>
                            {translation.sura} {suraOrder}. {suraTitle}
                        </Title>
                        <IconButton onPress={onClose}>
                            <Icon name='Close' color='#FFD8A7' size={24}/>
                        </IconButton>
                    </View>
                    <Title style={styles.ayatTitle}>
                        {translation.commentariesOnAyat+' '+ayatOrder}
                    </Title>
                    <View style={styles.commentsListBox}>
                        {comments
                            ? <CommentsList comments={comments}/>
                            : <Text style={styles.comment}>{translation.noComment}</Text>} 
                    </View>
                </View>
                <CustomButton onPress={onClose} text={translation.closeComment}/>
            </View>
        </Modal>
    )
}