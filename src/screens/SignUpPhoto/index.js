import React,{useState, useContext} from 'react';


import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    CustomAddPhotoButton,
    CustomBackButton,
    DescriptionText,
    ImagePhoto
} from './styles';


import Rest from '../../services/rest';
import {useNavigation} from '@react-navigation/native';
import { SignUpContext } from '../../contexts/SignUpContext';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import CameraImage from '../../assets/images/take_photo.svg';
import BackIcon from '../../assets/icons/back.svg';
import AddIcon from '../../assets/icons/add.svg';
import SwapIcon from '../../assets/icons/swap.svg';



export default () => {
    const {state:user} = useContext(SignUpContext);

    const [photo,setPhoto] = useState("");
    const [photoUrl,setPhotoUrl] = useState("");

    const navigation = useNavigation();

    const handleRegisterButtonClick = async() => {
        console.log("user",user)

        
        // Validar foto
        if(photo.length > 0){
            // Fazer Request
            let response = await Rest.signUp(user.user.name,user.user.login,user.user.password,user.user.confirmPassword,photo);

            // Validar Retorno
            if(response.status == '200'){


                // Redireciona para tela de login
                navigation.reset({
                    routes:[{name:"SignIn"}]
                });

            }else{
                alert(response.erro_msg)
            }

        }else{
            alert("Selecione um foto")
        }

    }

    const handleBackButtonClick = () => {
        navigation.goBack();
    }

    const handleAddPhotoButtonClick = () => {
        let options = {
            includeBase64:true,
        };

        launchImageLibrary(options,res =>{
            if(res.didCancel || res.errorCode){
                return;
            }
            setPhoto(res.base64);
            setPhotoUrl(res.uri)
        })
    }

    return(
        <Container>

            {/* back button */}
            <CustomBackButton onPress={handleBackButtonClick}> 

                <BackIcon
                    width="48"
                    height="48"
                    fill="#fff"
                />
                
            </CustomBackButton>

            <DescriptionText>
                Escolha uma foto
            </DescriptionText>
            
            {photoUrl.length > 0?(
                <ImagePhoto 
                    source={{uri:photoUrl}}
                />
            ):(
                <CameraImage 
                    width="100%"
                    height="160"
                />
            
            )
            }
           
            {/*add photo button  */}
            <CustomAddPhotoButton onPress={handleAddPhotoButtonClick}>
                <CustomButtonText>

                    {photoUrl.length>0?
                        (
                            <SwapIcon
                                width="48"
                                height="48"
                                fill="#fff"
                            />
                        ):(
                            <AddIcon
                                width="36"
                                height="36"
                                fill="#fff"
                            />
                        )
                    }
                    
                    
                </CustomButtonText>
            </CustomAddPhotoButton>


            <InputArea>        

                <CustomButton>

                    <CustomButtonText onPress={handleRegisterButtonClick}>
                        CADASTRAR
                    </CustomButtonText>

                </CustomButton>

            </InputArea>

        </Container>
    );
};