import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Button = (props: any) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPress}>
      <Text style={styles.btnText}>{props?.buttonTitle || 'Click Me'}</Text>
    </TouchableOpacity>
  );
};
export default Button;
