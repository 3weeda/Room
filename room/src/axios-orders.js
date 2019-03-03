import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://room111.firebaseio.com/'
})

export default instance;