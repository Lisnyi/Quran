import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import { IntroductionScreen, DetailsScreen } from '../../screens'
import type { ChapterRootStackParamList } from '../../types';

export const ChapterRoutes: FC = () => {

  const Stack = createStackNavigator<ChapterRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Introduction">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Introduction" component={IntroductionScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}