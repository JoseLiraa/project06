import { StyleSheet } from "react-native";
import { theColors} from "../../../assets/Colors"

const styles = StyleSheet.create({
    container: {
        marginVertical: 45,
    },
    text: {
        color: theColors.background,
        fontSize: 36,
        textAlign: "center",
        fontWeight: 'bold',
    },    
});

export default styles;