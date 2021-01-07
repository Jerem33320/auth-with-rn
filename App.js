import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import SignUp from './components/Signup';
import Login from './components/Login';
import Loading from './components/Loading';
import { AuthProvider } from './contexts/AuthContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Loading" component={Loading} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
