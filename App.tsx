/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import StackNavigator from './src/navigation/PrimaryNavigator';
const baseUrl = 'http://192.168.2.114:3000/todos';
import axios from 'axios';
const App = () => {
  const [movies, setMovies] = useState([]);
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  };
  useEffect(() => {
    console.log('came here');
    axios
      .get(baseUrl, config)
      .then(response => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <StackNavigator />
    </>
  );
};
export default App;
