import * as React from 'react';
import { StatusBar } from 'react-native';
// Biblioteca de Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import das telas do app
import Welcome from './src/pages/Welcome';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ConfirmRegister from './src/pages/ConfirmRegister';
import ConfirmLogin from './src/pages/ConfirmLogin';

const Stack = createNativeStackNavigator();

function App() {

  return (

    // A view se torna o NavigationContainer para fazer as navegações
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />

      {/* Chamando a tela de Welcome */}
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

        {/* Chamando a tela de Login */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />

        {/* Chamando a tela de Register */}
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />

        {/* Chamando a tela de ConfirmRegister */}
        <Stack.Screen
          name="ConfirmRegister"
          component={ConfirmRegister}
          options={{ headerShown: false }}
        />

        {/* Chamando a tela de ConfirmLogin */}
        <Stack.Screen
          name="ConfirmLogin"
          component={ConfirmLogin}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;