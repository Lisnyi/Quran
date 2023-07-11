import { FC } from 'react'
import { Text, ScrollView, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Container, Section, Header, CustomButton } from "../../components";
import { styles } from './IntroductionScreen.styled'
import { useTranslation, useAlignmentContext, useFontSizeContext } from '../../shared';
import type { ChapterRootStackParamList } from '../../types'

type IntroductionProps = StackScreenProps<ChapterRootStackParamList, "Introduction">

export const IntroductionScreen: FC <IntroductionProps> = ({navigation, route}) => {

  const { suraId, suraOrder, title, introduction, ayats } = route.params
  const translation = useTranslation()
  const { alignment } = useAlignmentContext()
  const { fontSize } = useFontSizeContext()

  return (
    <Container>
      <Section>
        <Header title={`${suraOrder}. ${title}`}/>
        <ScrollView>
          <View style={styles.contentBox}>
            <Text style={styles.title}>Вступ до сури</Text>
            <Text style={{...styles.content, textAlign: alignment, fontSize: fontSize, lineHeight: fontSize*1.5}}>{introduction}</Text>
            <CustomButton onPress={()=> navigation.navigate('Details', {suraId, suraOrder, title, ayats})} text={translation.continue}/>
          </View>
        </ScrollView>
      </Section>
    </Container>
  )
}