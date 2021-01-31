import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fb400-default-rtdb.firebaseio.com/'
});

export default instance;