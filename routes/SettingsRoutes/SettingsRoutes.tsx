import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import { HelpScreen, SendMessageScreen, SettingsScreen, ReviewScreen } from '../../screens'

export type SettingsRootStackParamList = {
    SettingsList: undefined;
    Help: undefined;
    SendMessage: undefined;
    Review: undefined;
  };

export const SettingsRoutes: FC = () => {

    const Stack = createStackNavigator<SettingsRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="SettingsList">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SettingsList" component={SettingsScreen} />
        <Stack.Screen name="Help" component={HelpScreen}/>
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="SendMessage" component={SendMessageScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}