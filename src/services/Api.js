import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://podcastappbackend.herokuapp.com/'
});

export default Api;