import { FC } from 'react'
import { TouchableOpacity, Text, TextStyle } from 'react-native'
import { Icon } from '../../assets/icons'
import { styles } from './BottomHalfModalComponent.styled'

type Props = {
    icon: string,
    text: string,
    onPress: () => void,
    style?: TextStyle,
    disabled?: boolean
}

export const BottomHalfModalModalComponent: FC<Props> = ({icon, text, onPress, style, disabled=false}) => {

    return(
       <TouchableOpacity disabled={disabled} onPress={onPress} style={{...styles.item, ...style}}>
            <Icon name={icon} size={24} color='#FFFFFF'/>
            <Text style={styles.text}>{text}</Text>
       </TouchableOpacity>
    )
}