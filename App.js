import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';
import loadFont from './config/fonts';
import Layout from './layout/layout';
import HomeScreen from './screens/home';

export default function App() {
  useEffect(() => {
    loadFont();
  }, []);
  return (
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
