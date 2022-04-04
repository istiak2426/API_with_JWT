import axios from 'axios';
import { API } from '../utils/config';

export const register = (user) => {
    return axios.post(`${API}/auth/signup`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

export const login = (user) => {
    return axios.post(`${API}/auth/login`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};