import React, {useState} from 'react';
import {View} from 'react-native';
import {Button, Details} from '../../components';
import {TODOS} from '../../constants';
import styles from './styles';
const UpdateStatusScreen = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const currentTodo = TODOS.find(todo => route.params.id === todo.id);
  const [status, setStatus] = useState(currentTodo?.status || 'N/A');
  const [buttonState, setButtonState] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Details
          id={route.params.id}
          info={route.params.info}
          status={route.params.status}></Details>
      </View>
      <Button
        buttonTitle="Mark As Done"
        disabled={buttonState}
        style={[styles.btn, buttonState ? {opacity: 0.5} : {}]}
        onPress={() => {
          if (currentTodo?.status === 'Finished') {
            setButtonState(true);
          }
          if (currentTodo?.status === 'Pending') {
            let index = TODOS.findIndex(x => x.id === currentTodo.id);
            TODOS[index].status = 'Finished';
            setStatus('Finished');
            navigation.navigate('Home', {TODOS});
          } else {
            setButtonState(true);
          }
        }}
      />
    </>
  );
};

export default UpdateStatusScreen;
