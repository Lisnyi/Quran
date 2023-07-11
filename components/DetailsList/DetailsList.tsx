import { FC } from 'react'
import { FlatList, View } from 'react-native';
import { DetailsItem } from './DetailsItem';
import type { Ayat } from '../../types'

type Props = { 
    list: Array<Ayat>
}

export const DetailsList: FC<Props> = ({list}) => {

return (
        <FlatList
            ListHeaderComponent={<View></View>}
            ListHeaderComponentStyle={{paddingTop: 37}}
            data={list}
            renderItem={({item, index}) =>
                <DetailsItem
                    order={index+1}
                    ukrainianContent={item.ukrainianContent}
                    arabianContent={item.arabianContent}
                    video={item.video}
                    comments={item.comments}/>}
            keyExtractor={(item) => item.order.toString() }
        />
    )
}