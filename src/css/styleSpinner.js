import { StyleSheet, Dimensions } from "react-native";

import styleColors from './styleColors';

const styles = StyleSheet.create({
    spinner: {
        color: styleColors.BRANCO,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;