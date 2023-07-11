import { FC, useState } from 'react'
import { View, Text } from 'react-native';
import { IconButton } from '../../common';
import { BookmarkModal } from '../../modals';
import { Icon } from '../../../assets/icons';
import { removeBookmark } from '../../../localStorage/bookmarksStorage';
import { useAlignmentContext, useFontSizeContext } from '../../../shared';
import { styles } from './BookmarksItem.styled'
import type { Bookmark } from '../../../types'

export const BookmarksItem: FC<Bookmark> = ({suraId, suraOrder, surasTitle, arabianContent, ukrainianContent, ayatOrder}) => {

    const [modalVisible, setModalVisible] = useState(false);
    const { alignment } = useAlignmentContext()
    const { fontSize } = useFontSizeContext()

    return (
        <>
            <View style={styles.item}>
                <View style={styles.header}>
                    <View style={styles.headerTitlesBox}>
                        <Text style={styles.mainTitle}>
                            {`Сура ${suraOrder}. ${surasTitle}`}
                        </Text>
                        <Text style={styles.secondaryTitle}>
                            {`Аят ${ayatOrder}.`}
                        </Text>
                    </View>
                    <IconButton disabled={modalVisible} onPress={()=>setModalVisible(true)}>
                        <Icon name='More' size={24} color='#FFD8A7'/>
                    </IconButton>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.order}>
                        {`${ayatOrder}.`}
                    </Text>
                    <View style={styles.textBox}>
                        <Text style={{
                                ...styles.arabian,
                                textAlign: alignment,
                                fontSize: fontSize+4,
                                lineHeight: (fontSize+4)*1.5
                            }}>
                            {arabianContent}
                        </Text>
                        <Text style={{
                                ...styles.ukrainian,
                                textAlign: alignment,
                                fontSize: fontSize,
                                lineHeight: fontSize*1.5
                            }}>
                            {ukrainianContent}
                        </Text>
                    </View>
                </View>
            </View>
            <BookmarkModal
                isModalVisible={modalVisible}
                onClose={()=>setModalVisible(false)}
                deleteBookmark={()=>removeBookmark(suraId, ayatOrder)}
            />
        </>
)
}