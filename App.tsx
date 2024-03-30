import * as React from 'react';
import HomeScreen from './components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsPage from './components/DetailsPage';
import Settings from './components/Settings';
import {StatusBar} from 'react-native';
import AddBus from './components/AddBus/AddBus';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          {/* <Stack.Screen name="HomeScreen" component={AddBus} /> */}
          <Stack.Screen name="DetailsPage" component={DetailsPage} />
          <Stack.Screen name="SettingsPage" component={Settings} />
          <Stack.Screen name="AddNewBus" component={AddBus} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
