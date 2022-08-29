import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import UserList from './screems/UserList';
import CreateUser from './screems/CreateUser';
import DetailUser from './screems/DetailUser';

const Stack = createNativeStackNavigator()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CrearUsuario" component={CreateUser} />
      <Stack.Screen name="ListaUsuarios" component={UserList} />
      <Stack.Screen name="DetalleUsuario" component={DetailUser} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
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
