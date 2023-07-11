import { FC } from 'react'
import { View, Text } from 'react-native';
import { styles } from './InfoItem.styled';

type Props = {
    category: string,
    value: string | number,
    mb?: number
}

export const InfoItem: FC<Props> = ({category, value, mb=8}) => {

return (
    <View style={{...styles.item, marginBottom: mb}}>
        <View style={styles.categoryBox}>
            <View style={styles.marker}/>
            <Text style={styles.category}>
                {category+':'}
            </Text>
        </View>
        <Text style={styles.value}>
            {value}
        </Text>
    </View>
    )
}