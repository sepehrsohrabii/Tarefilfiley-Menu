import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');

const Stack = createNativeStackNavigator();
const Layout = () => {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Layout;
