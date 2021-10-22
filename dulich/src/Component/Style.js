import react from "react";
import { Button, TextInput } from "react-native-paper";
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, InputText,SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";





//background for login and register page
export const BackgroundAccount = styled.View`
flex: 1;
justify-content: center;
background-color: powderblue;
`;


export const CoverBackInSignUp = styled.View`
    width: 100%;
    padding-top: 30px;
    padding-left: 10px;
    align-items: flex-start;
    flex: 1
`;

export const CoverLogo = styled.View`
    width: 100%;
    padding-top: 50px;
    align-items: center;
    flex: 1
`;

export const CoverTitleSignup = styled.View`
    width: 100%;
    padding-top: 7px;
    align-items: center;
    flex: 1
`;

export const Logo = styled.Image`
    width: 450px;
    height: 200px;
`;


export const LoginTitle= styled.Text`
font-size: 18px;
margin-bottom: 20px;
letter-spacing: 1px;
font-weight: bold;
color: black;
`;

export const CoverLoginInput= styled.View`
width: 100%;
padding-top: -2px;
flex: 1.6
`;

export const CoverSignUpInput= styled.View`
width: 100%;
padding-top: -2px;
flex: 12
`;



export const LoginInput = styled(TextInput)`
margin-vertical:3px;
margin-bottom: 10px;
margin-left: 30px;
margin-right: 30px;
padding-top: 2px;
padding-left: 30px;
padding-right: 30px;

`;

export const ForgotPassword = styled.Text`
font-size: 16px;
padding-left:200px;
letter-spacing: 1px;
font-weight: bold;
color: cornflowerblue;
`;

export const CoverLoginButton = styled.View`
margin-right: 30px;
padding-top: 30px;
padding-left: 30px;
padding-right: 0px;
`;

export const SignUpInput = styled(TextInput)`
width: 290px;
height: 65px;
padding-top: 1px;
padding-left: 5px;
padding-right: 20px;
border-radius: 5px;
font-size:16px;
margin-vertical:3px;
margin-bottom: 10px;
margin-left: 35px;
`;

export const CoverSignUp = styled.View`
padding-top:30px;
width: 90%;
`;















 