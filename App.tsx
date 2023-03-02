import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './components/Homepage';
import Quiz from './components/Quiz';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, maxWidth: '100%', flexWrap: 'wrap' }}>
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} options={{ title: "Home" }} />
          <Stack.Screen name="Questions" component={Quiz} options={{ title: "Quiz" }}/>
        </Stack.Navigator>
        <StatusBar style="dark" />
      </NavigationContainer>
    </View>
  );
}
