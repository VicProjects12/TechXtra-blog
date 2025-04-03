import axios from 'axios';

const apiURL = 'http://localhost:3030';

export const getBlogs = async () => {
    // return blogs
    return axios.get(apiURL+'/blog')
    .then(result => {
        return result.data
    })      
    .catch(error => {
        return error
    });
}

export const createBlog = async (data) => {
    // return blog created
    return axios.post(apiURL+'/blog', data)
    .then(result => {
        return result.data
    })      
    .catch(error => {
        return error
    });
   
}

const getBlogbyid = async () => {
    // return blog by id
}





// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
// })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
// })
//   .finally(function () {
//     // always executed
// });