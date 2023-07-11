import { FC, useState } from 'react'
import { TouchableOpacity, View, Text, Platform, UIManager, LayoutAnimation } from 'react-native';
import { Icon } from '../../../assets/icons'
import { styles } from './Accordion.styled';

if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

type Props = {
    title: string,
    data: string
}

export const Accordion: FC<Props> = ({title, data}) => {

    const [expanded, setExpanded] = useState<Boolean>(false)

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded)
    }

return (
    <View>
        <TouchableOpacity
            onPress={()=>toggleExpand()}
            style={{...styles.item, paddingBottom: expanded ? 0 : 16, borderBottomWidth: expanded ? 0 : 1}}>
            <Text style={styles.title}>{title}</Text>
            <Icon name={expanded ? 'CaretUp' : 'CaretDown'} size={24} color='#FFFFFF'/>
        </TouchableOpacity>
    {
       expanded &&
        <View style={styles.dataBox}>
            <Text style={styles.data}>{data}</Text>    
        </View>
    }
    </View>
)
}