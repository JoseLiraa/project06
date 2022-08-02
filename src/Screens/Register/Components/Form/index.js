import React, { useEffect, useState } from "react";
import { View, TextInput, KeyboardAvoidingView } from 'react-native'
import styles from "./styles";
import { auth } from "../../../../Utils/Firebase";
import { useNavigation } from "@react-navigation/native";
import { theColors } from "../../../../../assets/Colors";
import Title from '../../../../Components/Title';
import Button from "../../../../Components/Button";
import Input from "../../../../Components/Input";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Form = ({titleForm, buttonTitle}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
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

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Register with: ',user.email);
        })
        .catch(error => alert(error.message))
    }

    return(
        <View 
            style = {styles.container} 
            behavior="padding">
            <Title title={titleForm}/>
            <Input 
            placeholder='Enter first name'
            value={ firstName }
            onChangeText={setFirstName}
            icon = {<Fontisto name='person' size={24} color={theColors.gray}/>}
            />
            <Input 
            placeholder='Enter last name'
            value={ lastName }
            onChangeText={setLastName}
            icon = {<Fontisto name='person' size={24} color={theColors.gray}/>}
            />
            <Input 
            type='phone-pad'
            placeholder='Enter a phone number'
            value={ phoneNumber }
            onChangeText={setPhoneNumber}
            icon = {<FontAwesome name='phone-square' size={24} color={theColors.gray}/>}
            />
            <Input 
            type='number-pad'
            placeholder='Enter your ager'
            value={ age }
            onChangeText={setAge}
            icon = {<FontAwesome name='birthday-cake' size={24} color={theColors.gray}/>}
            />
            <Input 
            type='email-address'
            placeholder='Enter email'
            value={ email }
            onChangeText={setEmail}
            icon = {<Ionicons name='mail' size={24} color={theColors.gray}/>}
            />
            <Input           
            secureTextEntry
            placeholder='Enter password'
            value={ password }
            onChangeText={setPassword}
            icon = {<FontAwesome name='lock' size={24} color={theColors.gray}/>}
            />
            <Button 
                buttonTitle={buttonTitle}        
                action={handleSignUp} 
                first='Do you have an account?' 
                second=' Login here'
                goTo='Login'/>
        </View>  
    )
}
export default Form;