import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './screens/Home';
import Register from './screens/Register';
import List from './screens/List';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Welcome',
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Cadastro',
            headerTransparent: true,
          }}
        />

        <Stack.Screen
          name="List"
          component={List}
          options={{
            title: 'Wallet Test',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
