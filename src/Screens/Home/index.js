import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import { auth } from "../../Utils/Firebase";
import styles from "./styles";

const Home = () => {
    const navigation = useNavigation();

    const handleSignOut = () =>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace('Login')
        })
        .catch(error => alert(error.message))
    }

    return(
    <View style = {styles.container}>
        <Text>Login with email: {auth.currentUser?.email}</Text>
        <TouchableOpacity
            activeOpacity={0.8} 
            style={styles.button}
            onPress={handleSignOut}>
            <Text style ={styles.textButton}>Sign Out</Text>
        </TouchableOpacity>
    </View>
    )
}
export default Home;