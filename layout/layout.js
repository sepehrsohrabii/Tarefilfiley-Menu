import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import * as Linking from 'expo-linking';

const Stack = createNativeStackNavigator();
const Layout = () => {
  const config = {
    screens: {
      Home: '/:restaurantLink',
    },
  };

  const linking = {
    prefixes: ['https://menu.tarefilfiley.me'],
    config,
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Layout;
