import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/hello';

export default function App() {
  return (
    <View style={styles.container}>
      {/* {<Hello/>} */}
      {/* {<Hello>World</Hello>} */}
      {/* {<Hello/>World</Hello>} */}
    
      <Hello bang = {false}> World</Hello>
      <Text>Hey, Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});