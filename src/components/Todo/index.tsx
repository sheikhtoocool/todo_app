import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
const TodoListContainer = (props: any) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.touchableContainer}>
        <Text style={styles.touchableOpacityText}>
          {props?.number || 'N/A'}
        </Text>
        <Text style={styles.touchableOpacityText}>{props?.task || 'N/A'}</Text>
        <Text style={styles.touchableOpacityText}>
          {props?.status || 'N/A'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default TodoListContainer;
