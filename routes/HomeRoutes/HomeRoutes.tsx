import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import { ChapterRoutes } from '../ChapterRoutes';
import { HomeScreen } from '../../screens';
import type { HomeRootStackParamList } from '../../types';

export const HomeRoutes: FC = () => {

  const Stack = createStackNavigator<HomeRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Content">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Content" component={HomeScreen} />
        <Stack.Screen name="Chapter" component={ChapterRoutes} />
      </Stack.Group>
    </Stack.Navigator>
  )
}