import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from 'react-redux'

import { store } from './store'

import Home from './screens/Home';
import Register from './screens/Register';
import List from './screens/List';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
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
              title: 'cadastro',
              headerTransparent: true,
              headerTintColor: '#12C2E9',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontFamily: 'PTSansCaption-Regular',
                fontSize: 22,
                fontWeight: "400",
              },
            }}
          />

          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: 'Wallet Test',
              headerStyle: {
                backgroundColor: '#FFF',
              },
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
