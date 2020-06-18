import { StyleSheet, Dimensions } from "react-native";

import styleColors from './styleColors';

const styles = StyleSheet.create({
    fundo: {
        backgroundColor: styleColors.CINZA_CLARO,
        padding: 20,
        alignItems: 'stretch',
        flex: 1
    },
    fundoItem: {
        backgroundColor: styleColors.CINZA_ITEM,
        padding: 10,
        alignItems: 'stretch',
        flex: 1
    },
    containerImg: {
        flex: 1,
        justifyContent: 'center'
    },
    img: {
        width: Dimensions.get('window').width - 40,
        height: 120,
    },
    containerbtn: {
        flex: 1
    },
    btnDefault: {
        backgroundColor: styleColors.AZUL,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 25
    },
    txtDefault: {
        fontSize: 20,
        color: styleColors.BRANCO,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    itemFlat: {
        backgroundColor: styleColors.CINZA_CLARO,
        borderRadius: 4,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemFlatCenter: {
        alignItems: 'center'
    },
    itemFlatEnd: {
        alignItems: 'flex-end',
    },
    labelItemFlat: {
        fontSize: 15,
        color: styleColors.CINZA,
    },
    valueItemFlat: {
        fontSize: 20,
        color: styleColors.CINZA_ESCURO,
        fontWeight: 'bold'
    },
    componentInput: {
        flex: 1,
    },
    titulo: {
        color: styleColors.CINZA_ESCURO,
        fontSize: 35,
        fontWeight: 'bold',
        lineHeight: 40,
        marginBottom: 20,
    },
    labelAgricultor: {
        fontSize: 15,
        color: styleColors.CINZA,
    },
    nomeAgricultor: {
        fontSize: 30,
        color: styleColors.CINZA_ESCURO,
        fontWeight: 'bold'
    },
    picker: {
        backgroundColor: styleColors.CINZA_MEDIO,
    },
    dataPicker: {
        width: '100%',
        backgroundColor: styleColors.CINZA_MEDIO,
        height: 50,
        fontSize: 18
    },
    containerInput: {
        marginBottom: 20
    },
    labelForm: {
        marginBottom: 5,
        color: styleColors.CINZA,
        fontSize: 16
    },
    inputDefault: {
        borderBottomColor: styleColors.CINZA_MEDIO,
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        color: styleColors.BRANCO_PRIMARY,
        height: 40,
        paddingLeft: 5,
        fontSize: 18,
    },
    componentTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: styleColors.CINZA,
        marginBottom: 10,
        marginHorizontal: -10,
        marginTop: -10
    },
    labelTotal: {
        color: styleColors.BRANCO,
        fontSize: 16,
        paddingRight: 5
    },
    valueTotal: {
        color: styleColors.BRANCO,
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;