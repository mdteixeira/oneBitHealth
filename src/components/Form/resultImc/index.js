import { Text, View } from 'react-native';
import React from 'react';
import styles from './style';

export default function ResultImc(props) {
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}
