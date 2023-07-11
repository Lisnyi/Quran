import { FC } from 'react'
import { FlatList } from 'react-native';
import { CommentsItem } from './CommentsItem';
import type { Ayat } from '../../types'

type Props = Pick<Ayat, 'comments'>

export const CommentsList: FC<Props> = ({comments}) => {

return (
        <FlatList
            data={comments}
            renderItem={({item, index}) => <CommentsItem order={index+1} comment={item}/>}
            keyExtractor={index => index.toString()}
        />
    )
}