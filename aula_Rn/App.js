import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Home from './src/screens/Home';
import HomeMap from './src/screens/HomeMap';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      {/* <Home /> */}
      <HomeMap />
    </>
  );
}
