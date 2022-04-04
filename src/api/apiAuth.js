import axios from 'axios';






export const register = (user) => {


    const devEnv = process.env.NODE_ENV !== "production";
const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;


    return axios.post(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/auth/signup`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

export const login = (user) => {

    const devEnv = process.env.NODE_ENV !== "production";
    const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
   


    return axios.post(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/auth/login`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};