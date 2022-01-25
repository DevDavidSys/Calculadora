const axios = require('axios').default;

const api = axios.create({
    baseURL:'http://localhost:5000/',
})


export default api;