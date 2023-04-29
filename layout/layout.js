import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import * as Linking from 'expo-linking';

const Stack = createNativeStackNavigator();
const Layout = () => {
  const config = {
    screens: {
      Home: {
        path: '',
        screens: {
          Home: '/:restaurantLink',
        },
      },
    },
  };
  const linking = {
    prefixes: [],
    config,
    // config: {
    //   initialRouteName: 'Feed',
    //   screens: {
    //     Home: '/:restaurantLink',
    //   },
    // },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={({ route }) => ({ restaurantLink: `${route.params.restaurantLink}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Layout;
