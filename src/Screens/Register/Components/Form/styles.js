import { StyleSheet } from "react-native";
import { theColors } from "../../../../../assets/Colors";

const styles = StyleSheet.create({
    container:{     
        flex: 1,
        alignItems: 'center',
    },
    inputsContainer:{
        width: '80%',
    }, 
    singleInputContainer:{
        backgroundColor: theColors.gray2,   
        marginTop: 24,
        borderRadius: 10,
        borderColor: theColors.background,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
    },
    input:{
        width: '80%',
        padding: 12,       
    },   
});

export default styles;