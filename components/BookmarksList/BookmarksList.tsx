import { FC } from 'react'
import { FlatList, View } from 'react-native';
import { BookmarksItem } from './BookmarksItem';
import type { Bookmark } from '../../types'

type Props = { 
    list: Array<Bookmark>
}

export const BookmarksList: FC<Props> = ({list}) => {

return (
        <FlatList
            data={list}
            ListHeaderComponent={<View></View>}
            ListHeaderComponentStyle={{paddingTop: 37}}
            renderItem={({item}) =>
                <BookmarksItem
                    suraId={item.suraId}
                    suraOrder={item.suraOrder}
                    surasTitle={item.surasTitle}
                    arabianContent={item.arabianContent}
                    ukrainianContent={item.ukrainianContent}
                    ayatOrder={item.ayatOrder}/>}
            keyExtractor={(item) => `${item.suraId}${item.ayatOrder}`}
        />
    )
}