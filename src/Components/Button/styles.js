import { StyleSheet } from "react-native";
import { theColors } from "../../../assets/Colors";

const styles = StyleSheet.create({    
    buttonContainer:{
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
    button:{
        backgroundColor: theColors.background,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    textButton:{
        color: theColors.white,
        fontWeight: 'bold',
        fontSize: 16,
    },
    textContainer:{
        marginTop: 10,
        flexDirection: 'row'
    },
    linkText: {
        color: theColors.background,
    },
});

export default styles;