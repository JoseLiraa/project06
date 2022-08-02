import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Button = ({buttonTitle, action, first, second, goTo}) => {
    const navigation = useNavigation();
    return(
        <View style= {styles.buttonContainer}>
            <TouchableOpacity
                style= {styles.button}
                activeOpacity={0.8} 
                onPress={action}>
                <Text style = {styles.textButton}>{buttonTitle}</Text>
            </TouchableOpacity>        
            <View style={styles.textContainer}>
                <Text>{first}</Text> 
                    <TouchableOpacity
                    activeOpacity={0.8}                    
                    onPress={()=>navigation.replace(goTo)}>
                        <Text  style={styles.linkText}>{second}</Text>
                    </TouchableOpacity>
            </View>
    </View>
    )
};

export default Button;