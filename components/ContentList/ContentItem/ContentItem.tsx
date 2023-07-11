import { FC, useState } from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../../assets/icons';
import { IconButton } from '../../common';
import { InfoModal } from '../../modals';
import { styles } from './ContentItem.styled';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { Sura, HomeRootStackParamList } from '../../../types';

type Props = {
    item: Sura
}

type ContentScreenNavigationProp = StackNavigationProp<HomeRootStackParamList, 'Content'>

export const ContentItem: FC<Props> = ({item}) => {

    const navigation = useNavigation<ContentScreenNavigationProp>();

    const [modalVisible, setModalVisible] = useState(false);

    const { id, traditionalOrder, ukrainianTitle, introduction, ayats } = item

    function openSura () {
       navigation.navigate('Chapter', {
            screen: 'Introduction',
            params: {
                suraId: id,
                suraOrder: traditionalOrder,
                title: ukrainianTitle,
                introduction,
                ayats
            }
        })
    }

    return (
        <>
            <View style={styles.item}>
                <Text style={styles.text}>
                    {`${traditionalOrder}. ${ukrainianTitle}`}
                </Text>
                <View style={styles.buttonsBox}>
                    <IconButton disabled={modalVisible} onPress={()=>setModalVisible(true)} style={styles.infoButton}>
                        <Icon name='Info' size={24} color='#88BBBB'/>
                    </IconButton>
                    <IconButton onPress={openSura}>
                        <Icon name='CaretRight' size={24} color='#FFFFFF'/>
                    </IconButton>
                </View>
            </View>
            <InfoModal
                isModalVisible={modalVisible}
                onClose={()=>setModalVisible(false)}
                openSura={openSura}
                item={item}
            />
        </>
    )
}