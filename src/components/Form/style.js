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
    // flex: 1,
    // justifyContent: 'center',
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: 45,
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
    backgroundColor: '#FF0043',
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30,
    width: '80%',
    marginLeft: '10%',
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
    height: '33%',
  },
  listImcs: {
    marginTop: 20,
    width: '100%',
  },
  resultImcItem: {
    fontSize: 20,
    color: 'red',
    fontWeight: '500',
  },
  resultImcData: {
    fontSize: 16,
  },
  viewResultadosButton: {
    paddingHorizontal: 20,
    marginTop: 50,
    backgroundColor: '#ddd',
    borderRadius: 50,
    paddingVertical: 10,
    marginVertical: 10,
  },
  resultadosButtonText: {
    color: 'black',
  },
  listItem: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fafafa',
  },
});

export default styles;
