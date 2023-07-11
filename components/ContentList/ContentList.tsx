import { FC } from 'react'
import { FlatList, View } from 'react-native';
import { ContentItem } from './ContentItem';
import type { Sura } from '../../types'

type Props = { 
    list: Array<Sura>
}

export const ContentList: FC<Props> = ({list}) => {

    return (
        <FlatList
            ListHeaderComponent={<View></View>}
            ListHeaderComponentStyle={{paddingTop: 24}}
            data={list}
            renderItem={({item}) => <ContentItem item={item}/>}
            keyExtractor={item => item.id}
        />
    )
}