import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Main from './src/components/Main';
import Form from './src/components/Form';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
      <Form />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:80,
  },
});
