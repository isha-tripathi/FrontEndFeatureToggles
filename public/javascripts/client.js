const axios = require('axios');

module.exports = {
    fetchAPIVersion: () => {
        return axios.get('http://localhost:8080/feature/version').then(res => res.data)
    }
};