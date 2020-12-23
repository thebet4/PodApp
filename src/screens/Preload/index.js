import React,{useEffect, useContext} from 'react';
import { Container,LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import Rest from '../../services/rest';
import { UserContext } from '../../contexts/UserContext';

import Preload from '../../assets/images/pre_loading.svg';


export default () => {
    const { dispatch:userDispatch } = useContext(UserContext);

    const navigation = useNavigation();

    useEffect(()=>{

        const checkToken = async () => {
            const token = await AsyncStorage.getItem('podToken');
            // const token = await AsyncStorage.getItem('pod');

            if(token){
                let response = await Rest.checkToken(token);
                console.log(response)

                if(response.status == '200'){

                    userDispatch({
                        type:'setUser',
                        payload:{
                            user:{
                                id:response.data.id,
                                name:response.data.name,
                                login:response.data.email,
                            }
                        }
                    });

                    navigation.reset({
                        routes:[{name:"MainTab"}]
                    });

                }else{

                    navigation.reset({
                        routes:[{name:"SignIn"}]
                    });

                }
                
            } else {
                navigation.reset({
                    routes:[{name:"SignIn"}]
                });
            }

        }

        checkToken();

    },[])


    return(
        <Container>

            <Preload 
                width="100%"
                height="160"
            />

            <LoadingIcon 
                size="large"
                color="#fff"
            />

        </Container>
    );
};

// 18191A