import { FC } from 'react'
import { View, Text } from 'react-native';
import { useAlignmentContext, useFontSizeContext } from '../../../shared';
import { styles } from './CommentsItem.styled'

type Props ={
    order: number,
    comment: string
}

export const CommentsItem: FC<Props> = ({order, comment}) => {

    const { alignment } = useAlignmentContext()
    const { fontSize } = useFontSizeContext()

    return (
        <View style={styles.item}>
            <Text style={styles.order}>
                {order}.
            </Text>
            <Text style={{
                    ...styles.comment,
                    textAlign: alignment,
                    fontSize: fontSize,
                    lineHeight: fontSize*1.375
                }}>
                {comment}
            </Text>
        </View>
    )
}