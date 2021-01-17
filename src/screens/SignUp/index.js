import React,{useState, useContext} from 'react';

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
} from './styles';
import SignInput from '../../components/SignInput';


import Rest from '../../services/rest';
import {useNavigation} from '@react-navigation/native';
import { SignUpContext } from '../../contexts/SignUpContext';

import Logo from '../../assets/images/audio_player.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/lock.svg';
import NameIcon from '../../assets/icons/account.svg';


export default () => {
    const { dispatch:SignUpDispatch } = useContext(SignUpContext);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigation = useNavigation();

    // Volta para Login
    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name:"SignIn"}]
        });
    }

    // Valida dados
    const handleRegisterButtonClick = async() => {



        if(name && email && password && confirmPassword){

            if(email.indexOf('@') > 0 && email.indexOf('.com') > 0){

                if(password == confirmPassword){

                    //Salvar em um context
                    SignUpDispatch({
                        type:'setUser',
                        payload:{
                            user:{
                                name,
                                login:email,
                                password,
                                confirmPassword
                            }
                        }
                    });


                    // redireciona para tela de foto
                    navigation.navigate("SignUpPhoto");


                }else{
                    alert("As senhas devem ser iguais");
                }

            }else{
                alert("Email invalido");
            }

        }else{
            alert("Todos os campos devem ser preenchidos");
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
                    Icon={NameIcon}
                    placeholder="Nome"
                    value={name}
                    onChangeText={text => setName(text)}
                />

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

                <SignInput 
                    Icon={PasswordIcon}
                    placeholder="Repita a senha"
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    password={true}
                />
                
                <CustomButton>

                    <CustomButtonText onPress={handleRegisterButtonClick}>
                        PROXIMO
                    </CustomButtonText>

                </CustomButton>

            </InputArea>

            <SignMessageButton
                onPress={handleMessageButtonClick}
            >

                <SignMessageButtonText>Já tem um conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                
            </SignMessageButton>

        </Container>
    );
};