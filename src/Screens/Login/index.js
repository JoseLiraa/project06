import React from "react";
import { View, Image } from 'react-native'
import Background from '../../../assets/Images/1.jpeg'
import styles from "./styles";
import Form from "./Components/Form";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const Login = () => {

    return(
        <View style = {styles.container} >
            <Image 
            source={Background}
            resizeMode= 'stretch'
            style= {styles.backImage}/>
            <KeyboardAwareScrollView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style= {styles.formWrapper}>
                <Form titleForm='Log In' buttonTitle='Login'/>
            </KeyboardAwareScrollView>
        </View>    
    )
}
export default Login;