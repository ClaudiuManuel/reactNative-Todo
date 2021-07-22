/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AddTodo from './src/components/addtodo';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/components/home';
import Details from './src/components/details';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="AddTodo" component={AddTodo} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
