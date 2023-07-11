import { FC } from 'react'
import { TouchableOpacity, GestureResponderEvent, View, Text } from 'react-native';
import { Icon } from '../../assets/icons'
import { styles } from './SettingsItem.styled';

type Props = {
    onPress: (e: GestureResponderEvent) => void,
    icon: string,
    optionName: string,
    moreInfo?: boolean,
    pick?: string | number 
}

export const SettingsItem: FC<Props> = ({onPress, icon, optionName, moreInfo = true, pick}) => {
return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles.iconBox}>
            <Icon name={icon} size={20} color='#88BBBB'/>
        </View>
        <View style={styles.textBox}>
            <Text style={styles.text}>
                {optionName}
            </Text>
        </View>
        {moreInfo && pick
        ?   <View style={styles.pickedOptionBox}>
                <Text style={styles.pickedOption}>
                    {pick}
                </Text>
            </View>
        :   <View style={styles.arrowBox}>
                <Icon name='CaretRight' size={24} color='#88BBBB'/>
            </View>}
    </TouchableOpacity>
)
}