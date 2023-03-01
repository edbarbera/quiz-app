import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './components/Homepage';
import Questions from './components/Questions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} options={{ title: "Home" }} />
        <Stack.Screen name="Questions" component={Questions} options={{ title: "Quiz" }}/>
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
