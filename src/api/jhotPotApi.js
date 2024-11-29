import axios from 'axios';

const jhotPotApi = axios.create({
    // baseURL: 'http://192.168.1.10:4000',
    baseURL: 'http://192.168.112.12:4000',
});

export default jhotPotApi;
