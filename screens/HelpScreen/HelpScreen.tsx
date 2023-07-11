import { FC } from 'react'
import { Container, Section, Header, HelpMenu } from "../../components";
import { useTranslation } from '../../shared';

export const HelpScreen: FC = () => {

  const translation = useTranslation()

  return (
    <Container>
      <Section>
        <Header title={translation.help}/>
        <HelpMenu/>
      </Section>
    </Container>
  )
}