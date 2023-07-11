import { FC, useState } from 'react'
import { View, Text } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { IconButton, CustomButton } from '../../common';
import { Icon } from '../../../assets/icons';
import { styles } from './DetailsItem.styled';
import { DetailsModal } from '../../modals';
import { VideoPlayer } from '../../VideoPlayer';
import { addBookmark } from '../../../localStorage/bookmarksStorage'
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTranslation, useAlignmentContext, useFontSizeContext, sendToast, share } from '../../../shared';
import type { ChapterRootStackParamList, Ayat } from '../../../types'

export const DetailsItem: FC<Ayat> = ({order, arabianContent, ukrainianContent, video, comments}) => {

    const route = useRoute<RouteProp<ChapterRootStackParamList, 'Details'>>()
    const { suraId, suraOrder, title } = route.params
    const translation = useTranslation();
    const { alignment } = useAlignmentContext()
    const { fontSize } = useFontSizeContext()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    const addNewBookmark = async () => {
        try {
            const bookmark = {
                suraId,
                suraOrder,
                surasTitle: title,
                arabianContent,
                ukrainianContent,
                ayatOrder: order
            }
            await addBookmark(bookmark)
        }
        catch (e) {
            sendToast('Something went wrong')
        }
    }

    const sharedContent = `Сура ${suraOrder}. ${title}\nАят ${order}.\n${arabianContent}\n${ukrainianContent}`

    const copyToClipboard = async () => {
        try {
            await Clipboard.setStringAsync(sharedContent);
            sendToast('Copied to clipbord')
        }
        catch (e) {
            sendToast('Something went wrong')
        }
    };

    const onShare = async () => {
        await share(sharedContent)
    }

    return (
        <View>
            <View style={styles.item}>
                <Text style={styles.order}>{`${order}.`}</Text>
                <View style={styles.contentBox}>
                    <Text style={{...styles.arabianText, textAlign: alignment, fontSize: fontSize+4, lineHeight: (fontSize+4)*1.375}}>
                        {arabianContent}
                    </Text>
                    <Text style={{...styles.ukrainianText, textAlign: alignment, fontSize: fontSize, lineHeight: fontSize*1.5}}>
                        {ukrainianContent}
                    </Text>
                </View>
                <IconButton disabled={isModalVisible} onPress={()=>setIsModalVisible(true)}>
                    <Icon name='More' color='#FFD8A7' size={24}/>
                </IconButton>
                <DetailsModal
                    isModalVisible={isModalVisible}
                    onClose={()=>setIsModalVisible(false)}
                    suraOrder={suraOrder}
                    suraTitle={title}
                    ayatOrder={order}
                    comments={comments}
                    addBookmark={addNewBookmark}
                    copy={copyToClipboard}
                    onShare={onShare}
                />
            </View>
            {video &&   <View style={styles.videoButton}>
                            {showVideo && <VideoPlayer uri={video}/>}
                            <CustomButton onPress={()=>setShowVideo(!showVideo)} text={showVideo ? translation.hideVideo : translation.watchVideo}/>
                        </View>}
        </View>
            
    )
}