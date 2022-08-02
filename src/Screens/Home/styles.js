import { StyleSheet } from "react-native";
import { theColors } from "../../../assets/Colors";

const styles = StyleSheet.create({
    container:{     
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },              
    button:{
        backgroundColor: theColors.background,
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    textButton:{
        color: theColors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default styles;