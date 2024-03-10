import { Text, View, TouchableOpacity, Share } from 'react-native';
import React from 'react';
import styles from './style';

export default function ResultImc(props) {
  const onShare = async () => {
    const result = await Share.share({
      message: 'Meu IMC é: ' + props.resultImc,
    });
  };

  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{props.messageImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
      <View style={styles.boxShareButton}>
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <Text style={styles.sharedText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
