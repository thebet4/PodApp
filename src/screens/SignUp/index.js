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

import SignInput from '../../components/SignInput';

import {useNavigation} from '@react-navigation/native';

import Rest from '../../services/rest';

import Logo from '../../assets/images/audio_player.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/lock.svg';
import NameIcon from '../../assets/icons/account.svg';


export default () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigation = useNavigation();

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes:[{name:"SignIn"}]
        });
    }

    const handleRegisterButtonClick = async() => {

        if(name && email && password && confirmPassword){

            if(email.indexOf('@') > 0 && email.indexOf('.com') > 0){

                if(password == confirmPassword){
                    let response = await Rest.signUp(name,email,password,confirmPassword);

                    if(response.status == '200'){

                        console.log(response);
                        navigation.reset({
                            routes:[{name:"SignIn"}]
                        });

                    }else{
                        alert(response.erro_msg)
                    }

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
                        CADASTRAR
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