import axios from 'axios';

const baseUrl = 'http://192.168.100.136:3000';
const fetchUser = async () => {
  const url = `${baseUrl}/todos/1`;
  const response = await axios.get(url);
  console.log(response.data);
};
