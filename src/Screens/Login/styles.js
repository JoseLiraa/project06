import { StyleSheet } from "react-native";
import { theColors } from "../../../assets/Colors";

const styles = StyleSheet.create({
    container:{     
        flex: 1,
    },              
    backImage:{
        height: '40%',
        width: '100%',
    },
    formWrapper:{
        flex: 1,
        backgroundColor: theColors.white,
        borderTopLeftRadius: 60,
        marginTop: -60,
    }
});

export default styles;