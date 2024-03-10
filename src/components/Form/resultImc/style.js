import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 20,
    paddingTop: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  numberImc: {
    fontSize: 48,
    color: '#FF0043',
    fontWeight: 'bold',
  },
  information: {
    fontSize: 18,
    color: '#FF0043',
    fontWeight: 'bold',
  },
  boxShareButton: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 30,
  },
  shared: {
    backgroundColor: '#1877F2',
    borderRadius: 20,
    paddingVertical: 7,
  },
  sharedText: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
});

export default styles;
