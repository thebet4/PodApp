import Api from './Api';

export default {

    checkToken:async (token) => {
        const response = await Api.get('/user/refresh',{
            headers:{
                authorization:token,
            }
        });
        return response.data;
    },

    signIn: async (email,password) => {

        const response = await Api.post('/user/login',{
            email: email,
            password: password  
        });
        return response.data;

    },

    signUp: async (name,email,password,confirmPassword) => {
        const response = await Api.post('/user/create',{
            name: name,
            email: email,
            password: password,
            confirmPassword:confirmPassword 
        });
        return response.data;
    }

};