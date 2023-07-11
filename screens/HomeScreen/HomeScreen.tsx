import { FC } from 'react'
import { Octicons } from '@expo/vector-icons'
import { View, ActivityIndicator, StatusBar, Text } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { UserRootStackParamList, HomeRootStackParamList } from '../../types';
import { Container, Section, Title, IconButton, ContentList } from "../../components";
import { useGetSurasQuery } from '../../redux';
import { styles } from './HomeScreen.styled';
import { useTranslation } from '../../shared/hooks/useTranslation';

type HomeProps = CompositeScreenProps<
  StackScreenProps<HomeRootStackParamList, "Content">,
  StackScreenProps<UserRootStackParamList, "Home">
>;

export const HomeScreen: FC <HomeProps> = ({navigation}) => {

  const {data, isLoading, isError} = useGetSurasQuery()
  const translation = useTranslation()

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#125a55'
      />
      <Section>
        <View style={styles.navigation}>
          <IconButton onPress={() => navigation.navigate('Bookmarks')}>
            <Octicons name='bookmark' size={18} color="#FFD8A7"/>
          </IconButton>
          <Title style={styles.title}>
            {translation.quran}
          </Title>
          <IconButton onPress={() => navigation.navigate('Settings')}>
            <Octicons name='gear' size={18} color="#FFD8A7"/>
          </IconButton>
        </View>
        {isLoading && <View style={styles.indicator}>
                        <ActivityIndicator size="large" color="#FFD8A7" /> 
                      </View>}
        {data && <ContentList list={data}/>}
        {isError && <Text>Error</Text>}
      </Section>
    </Container>
  )
}