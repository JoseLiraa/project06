import React from "react";
import { View, TextInput } from 'react-native';
import styles from "./styles";

const Input = ({placeholder, value, onChangeText, icon, type, ...rest}) => {


    return(
        <View style={styles.inputsContainer}>
            <View style={styles.singleInputContainer}>
                {icon}
                <TextInput          
                    keyboardType={type}
                    placeholder={placeholder}
                    style={styles.input}
                    value = { value }
                    onChangeText={onChangeText}
                    {...rest}
                />
            </View>                
        </View>     
    )
}
export default Input;