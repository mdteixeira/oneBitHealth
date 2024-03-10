import { SafeAreaView, StyleSheet } from 'react-native';
import Title from './src/components/Title';
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
    paddingTop: 80,
  },
});
