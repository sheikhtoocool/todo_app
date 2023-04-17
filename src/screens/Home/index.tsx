import React from 'react';
import {View, FlatList} from 'react-native';
import {TODOS} from '../../constants';
import {Button} from '../../components';
import {Todo} from '../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
let temp = 0;
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={TODOS}
          renderItem={({item, index}) => (
            <Todo
              number={item.id}
              task={item.task}
              status={item.status}
              onPress={() => {
                navigation.navigate('Details', {
                  id: item.id,
                  info: item.task,
                  status: item.status,
                });
              }}
            />
          )}
          numColumns={1}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <Button
        buttonTitle="Add New Task"
        onPress={() => {
          navigation.navigate('NewTask');
        }}
      />
    </>
  );
};

export default HomeScreen;
