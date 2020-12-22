import React,{useState} from 'react';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
} from './styles';

import {useNavigation} from '@react-navigation/native';

import Rest from '../../services/rest';

import SignInput from '../../components/SignInput';
import Logo from '../../assets/images/audio_player.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/lock.svg';


export default () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigation();
    
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name:"SignUp"}]
        });
    }

    const handleSignClick = async() => {
        if(email != "" && password != ""){

            let response = await Rest.signIn(email, password)
            console.log(response)
            if(response.status == '200'){
                console.log(response)
                alert('deu certo')

                
                // Fazer LOGIN

            }else{
                alert(response.erro_msg)
            }

        }else{
            alert("Email e senha são obrigatórios")
        }
    }

    return(
        <Container>
            <Logo 
                width="100%"
                height="160"
            />

            <InputArea>

                
                <SignInput 
                    Icon={EmailIcon}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />

                <SignInput 
                    Icon={PasswordIcon}
                    placeholder="Senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    password={true}
                />

                <CustomButton 
                onPress={handleSignClick} >

                    <CustomButtonText>LOGIN</CustomButtonText>

                </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick} >

                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
                
            </SignMessageButton>

        </Container>
    );
};