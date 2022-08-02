import React, { useEffect, useState } from "react";
import { View } from 'react-native';
import styles from "./styles";
import { theColors } from "../../../../../assets/Colors";
import { auth } from "../../../../Utils/Firebase";
import { useNavigation } from "@react-navigation/native";
import Title from '../../../../Components/Title';
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Input";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Form = ({titleForm, buttonTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    }, [])

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with: ', user.email);
        })
        .catch(error => alert(error.message))
    }

    return(
        <View 
        style = {styles.container}>
            <Title title={titleForm}/>       
                <Input 
                placeholder='Enter email' 
                value = { email } 
                onChangeText={setEmail}
                icon=  {<Ionicons name="mail" size={24} color={theColors.gray}/>}
                />
                <Input 
                secureTextEntry
                placeholder='Enter password' 
                value = { password } 
                onChangeText={setPassword}
                icon=  {<FontAwesome name="lock" size={24} color={theColors.gray}/>}
                />
            <Button 
                buttonTitle={buttonTitle}        
                action={handleLogin} 
                first='Don’t have an account?' 
                second=' Sign up here'
                goTo='Register'/>
        </View>  
    )
}
export default Form;