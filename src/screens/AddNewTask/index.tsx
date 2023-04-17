import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {TODOS} from '../../constants';
import {Button} from '../../components';
import styles from './styles';
const AddNewTask = ({navigation, route}: {navigation: any; route: any}) => {
  const [text, setText] = useState('');

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          onChangeText={newText => setText(newText)}
        />
      </View>
      <Button
        buttonTitle="Create Task"
        onPress={() => {
          TODOS.push({id: TODOS.length + 1, task: text, status: 'Pending'});
          navigation.navigate('Home', {TODOS});
        }}
      />
    </>
  );
};

export default AddNewTask;
