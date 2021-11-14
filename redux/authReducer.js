const initialState = {
    isLogin: false,
    token: '',
    isLoading: false,
    user: {
        username : '',
        name: '',
    },
    pegawai: {},
    err_status: 0
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LOGIN' : return {
            ...state,
            isLogin: action.value
        }
        case 'SET_LOADING' : return {
            ...state,
            isLoading: action.value
        }
        case 'SET_TOKEN' : return {
            ...state,
            token: action.value
        }
        case 'SET_USER' : return {
            ...state,
            user: action.value
        }
        case 'SET_ERR' : return {
            ...state,
            err_status: action.value
        }
        case 'SET_PEGAWAI' : return {
            ...state,
            pegawai: action.value
        }


        default : return state
    }
}

export default authReducer;