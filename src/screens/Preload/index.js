import React,{useEffect} from 'react';
import { Container,LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

import Rest from '../../services/rest';

import Preload from '../../assets/images/pre_loading.svg';


export default () => {

    const navigation = useNavigation();

    useEffect(()=>{

        const checkToken = async () => {
            // const token = await AsyncStorage.getItem('token');
            const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTYwODU5NTg0NSwiZXhwIjoxNjA4NjgyMjQ1fQ.HuvyHG2BvieKnTa1BlzjF4jbcuE-X9uAFIB-jpxwKHE';
            if(true){
                // Token
                // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTYwODU5NTg0NSwiZXhwIjoxNjA4NjgyMjQ1fQ.HuvyHG2BvieKnTa1BlzjF4jbcuE-X9uAFIB-jpxwKHE
                let response = await Rest.checkToken(token);
                console.log(response)

                if(response.status == '200'){

                    navigation.reset({
                        routes:[{name:"Home"}]
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