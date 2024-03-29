import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContent: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    marginTop: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 20,
  },
  botaoCalcularTexto: {
    fontSize: 20,
    color: '#FFF',
  },
  botaoCalcular: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#FF0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 30,
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 5,
  },
  exhibitionResultImc: {
    width: '100%',
    height: '50%',
  },
});

export default styles;
