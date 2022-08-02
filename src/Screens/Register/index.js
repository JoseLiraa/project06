import React from "react";
import { View, Image} from 'react-native'
import Background from '../../../assets/Images/1.jpeg'
import styles from "./styles";
import Form from "./Components/Form";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const Register = () => {

    return(
        <View style = {styles.container} >
            <Image 
            source={Background}
            resizeMode= 'stretch'
            style= {styles.backImage}/>
            <KeyboardAwareScrollView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style= {styles.formWrapper}>
                <Form titleForm='Sign Up' buttonTitle='Sign Up'/>
            </KeyboardAwareScrollView>
        </View>    
    )
}
export default Register;