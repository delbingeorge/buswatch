import * as React from 'react';
import HomeScreen from './components/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailsPage from './components/DetailsPage';
import Project from './components/Project';
import {StatusBar, View} from 'react-native';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar backgroundColor="#32383d" barStyle="default" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailsPage" component={DetailsPage} />
          <Stack.Screen name="ProjectPage" component={Project} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
