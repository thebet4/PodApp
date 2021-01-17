import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView `

    background-color:#18191A;
        
    flex:1;
    justify-content:center;
    align-items:center;

`;

export const InputArea = styled.View `
    width:100%;
    padding:40px;
`;

export const CustomButton = styled.TouchableOpacity `
    height:60px;
    background-color:#303846;
    border-radius:30px;
    justify-content:center;
    align-items:center;
`;

export const CustomButtonText = styled.Text `
    font-size:18px;
    color:#fff;
`;

export const CustomAddPhotoButton = styled.TouchableOpacity `
    height:60px;
    width:60px;
    border-radius:60px;
    margin-top:20px;
    background-color:#303846;
    justify-content:center;
    align-items:center;
`;  

export const CustomBackButton = styled.TouchableOpacity`
    position:absolute;
    top:10px;
    left:0px;

    align-items:center;
    justify-content:center;
`;

export const DescriptionText = styled.Text`

    font-size:18px;
    font-weight:bold;
    color:#fff;
    margin-bottom:100px;

`;

export const ImagePhoto = styled.Image`
    width:200px;
    height:200px;
    border-radius:200px;
`;

