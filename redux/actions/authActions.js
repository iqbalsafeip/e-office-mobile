import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { removeItem, storeItem, getItem } from '../../utils/asyncStorage';


const BASE_URL = 'http://192.168.100.5:8080/';

export const login = data => dispatch => {
    return new Promise((resolve, reject)=> {
        dispatch({type: 'SET_LOADING', value: true});
        axios({
            method: 'POST',
            url: BASE_URL + 'user/login',
            data: data,
        })
            .then(function(response) {
                dispatch({type: 'SET_LOGIN', value: true });
                dispatch({type: 'SET_LOADING', value: false});
                const { token,name, role_name, username } = response.data;
                dispatch({type: 'SET_TOKEN', value: token});
                dispatch({type: 'SET_USER', value: {
                    username : username,
                    name: name,
                }});
                storeItem('token@eoffice', token);
                dispatch({type: 'SET_ERR', value: 0})
                resolve()
            })
            .catch(function(response) {
                const {status} = response.response
                dispatch({type: 'SET_LOADING', value: false})
                dispatch({type: 'SET_ERR', value: status})
                reject(response)
            });
    })
}

export const getPegawai = () => async dispatch  =>  {
    const token = await getItem('token@eoffice') 
    return await new Promise((resolve, reject)=> {
        dispatch({type: 'SET_LOADING', value : true});
        axios({
            method: 'GET',
            url: BASE_URL + 'pegawai/data',
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        })
            .then(function(response) {
                console.log(response.data.data);
                dispatch({type: 'SET_PEGAWAI', value: response.data.data})
                dispatch({type: 'SET_LOADING', value: false})
                resolve(response)
            })
            .catch(function(response) {
                dispatch({type: 'SET_LOADING', value: false})
                reject(response)
            });
    })
}

export const updatePegawai = (data) => async dispatch => {
    const token = await getItem('token@eoffice') 
    return await new Promise((resolve, reject)=> {
        dispatch({type: 'SET_LOADING', value : true});
        axios({
            method: 'GET',
            url: BASE_URL + 'pegawai/data',
            headers: {
                Authorization : 'Bearer ' + token,
                'Content-Type' : 'application/json'
            }
        })
            .then(function(response) {
                console.log(response.data.data);
                dispatch({type: 'SET_PEGAWAI', value: response.data.data})
                dispatch({type: 'SET_LOADING', value: false})
                resolve(response)
            })
            .catch(function(response) {
                dispatch({type: 'SET_LOADING', value: false})
                reject(response)
            });
    })
}

export const logout = data => dispatch => {
    dispatch({type: 'SET_USER', value: {} })
    dispatch({type: 'SET_TOKEN', value: '' })
    dispatch({type: 'SET_LOGIN', value: false })
    dispatch({type: 'SET_PEGAWAI', value: {}})
    removeItem('token@eoffice')
}