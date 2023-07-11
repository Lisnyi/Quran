import { FC } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { Container, Section, Header, DetailsList } from "../../components";
import type { ChapterRootStackParamList } from '../../types'

export type DetailsProps = StackScreenProps<ChapterRootStackParamList, "Details">

export const DetailsScreen: FC<DetailsProps> = ({route}) => {

  const { suraOrder, title, ayats } = route.params

  return (
    <Container>
      <Section>
        <Header title={`${suraOrder}. ${title}`}/>
        <DetailsList list={ayats} />
      </Section>
    </Container>
  )
}