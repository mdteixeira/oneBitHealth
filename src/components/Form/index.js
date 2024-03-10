import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
  Vibration,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import ResultImc from './resultImc';
import styles from './style';

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);

  const [imc, setImc] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);

  function calculaImc() {
    return setImc(
      (
        peso.replace(',', '.') /
        (altura.replace(',', '.') * altura.replace(',', '.'))
      ).toFixed(2)
    );
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage('Campo obrigatório!');
    }
  }

  function validarImc() {
    if (peso != null && altura != null) {
      Keyboard.dismiss();
      calculaImc();
      setAltura(null);
      setPeso(null);
      setMessageImc('Seu Imc é igual a: ');
      setTextButton('Calcular Novamente');
      setErrorMessage(null);
    } else {
      setImc(null);
      verificationImc();
      setTextButton('Calcular');
      setMessageImc('Preencha o peso e altura');
    }
  }

  return (
    <View style={styles.formContent}>
      {imc == null ? (
        <Pressable style={styles.form} onPress={Keyboard.dismiss}>
          <Text style={styles.formLabel}>Altura</Text>
          {errorMessage != null && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="1.75"
            keyboardType="numeric"
            onChangeText={setAltura}
            value={altura}
          ></TextInput>
          <Text style={styles.formLabel}>Peso</Text>
          {errorMessage != null && (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="75.55"
            keyboardType="numeric"
            onChangeText={setPeso}
            value={peso}
          ></TextInput>
          <TouchableOpacity
            title={textButton}
            onPress={validarImc}
            style={styles.botaoCalcular}
          >
            <Text style={styles.botaoCalcularTexto}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageImc={messageImc} resultImc={imc} />
          <TouchableOpacity
            title={textButton}
            onPress={validarImc}
            style={styles.botaoCalcular}
          >
            <Text style={styles.botaoCalcularTexto}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
