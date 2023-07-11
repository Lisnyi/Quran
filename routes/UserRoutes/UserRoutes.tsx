import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import { BookmarksScreen } from '../../screens'
import { SettingsRoutes } from '../SettingsRoutes'
import { HomeRoutes } from '../HomeRoutes'
import type { UserRootStackParamList } from '../../types';


export const UserRoutes: FC = () => {

  const Stack = createStackNavigator<UserRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeRoutes}/>
        <Stack.Screen name="Bookmarks" component={BookmarksScreen}/>
        <Stack.Screen name="Settings" component={SettingsRoutes}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}