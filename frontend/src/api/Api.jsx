import axios from 'axios';

const apiURL = 'http://localhost:3030'

export const getBlogs = () => {
    // return blogs
    return axios.get(apiURL+'/blog')
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}

export const createBlog = (data) => {
    // return blog created
    return axios.post(apiURL+'/blog', data)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}

const getBlogbyId = () => {
    // return blog by id
}

export const uploadedFile = (file) => {
    // return uploaded file
    const formData = new FormData();
    formData.append('file', file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return axios.post(apiURL+'/blogimage', formData, config)
    .then(result => {
        return result.data
    })
    .catch(error => {
        return error
    });
}