import React from 'react';
import { Container} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import Preload from '../../assets/images/pre_loading.svg';


export default () => {

    return(
        <Container>

            <Preload 
                width="100%"
                height="160"
            />

        </Container>
    );
};

// 18191A