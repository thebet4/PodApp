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

export const CustomButtonText= styled.Text `
    font-size:18px;
    color:#fff;
`;

export const SignMessageButton = styled.TouchableOpacity `
    flex-direction:row;
    justify-content:center;
    margin-top:50px;
    margin-bottom:20px;
`;

export const SignMessageButtonText= styled.Text= styled.Text `
    font-size:16px;
    color:#303846;
`;

export const SignMessageButtonTextBold = styled.Text `
    font-size:16px;
    color:#303846;
    font-weight:bold;
`;