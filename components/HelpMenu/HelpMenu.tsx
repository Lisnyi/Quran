import { FC } from 'react'
import { FlatList, View } from 'react-native'
import { Accordion } from '../common'
import { useTranslation } from '../../shared'

type Props = {}

export const HelpMenu: FC<Props> = () => {

    const translation = useTranslation()

    const menu = [
        {
            title: `${translation.quran}`,
            data: 'Коран – центральний релігійний текст Ісламу, який мусульмани вважають одкровенням від Бога (Аллаха). Його вважають найкращим твором у класичній арабській літературі[1][2][3][4]. Він складається з 114 глав (сур), які складаються з віршів (аятів).'
        },
        {
            title: `${translation.supportedDevices}`,
            data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et totam tempore quaerat, sed deleniti earum placeat molestias asperiores velit, eum fugit ipsum eos expedita neque voluptates labore aspernatur fugiat suscipit?'
        },
        {
            title: `${translation.sourceAndTranslation}`,
            data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et totam tempore quaerat, sed deleniti earum placeat molestias asperiores velit, eum fugit ipsum eos expedita neque voluptates labore aspernatur fugiat suscipit?'
        },
        {
            title: `${translation.bookmark}`,
            data: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et totam tempore quaerat, sed deleniti earum placeat molestias asperiores velit, eum fugit ipsum eos expedita neque voluptates labore aspernatur fugiat suscipit?'
        },
    ]

  return (
    <FlatList
        ListHeaderComponent={<View></View>}
        ListHeaderComponentStyle={{paddingTop: 37}}
        data={menu}
        renderItem={({item}) => <Accordion title={item.title} data={item.data}/>}
        keyExtractor={item => item.title}
  />
  )
}