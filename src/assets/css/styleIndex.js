import { StyleSheet, Dimensions } from "react-native";
import styleColors from './styleColors';
var {width} = Dimensions.get('window');

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        alignSelf: 'center',
        height: 250,
        width: width - 150,
    },
    imgIcon: {
        alignSelf: 'center',
        width: 85,
        height: 85,
        marginHorizontal: 20
    },
    imgDivizor: {
        alignSelf: 'center',
        width: '120%',
        height: 22,
    },
    containerbtn: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    btnDefault: {
        backgroundColor: styleColors.AZUL,
        padding: 12,
        borderRadius: 7,
        alignItems: 'center',
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
        color: styleColors.CINZA,
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
        fontSize: 16,
        color: styleColors.CINZA_PLACE,
    },
    inputDefault: {
        borderBottomWidth: 2,
        height: 43,
        fontSize: 18,
        marginTop: 5,
        borderBottomColor: styleColors.CINZA_MEDIO,
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
    },
    txtBtnHome: { 
        fontSize: 40, 
        fontWeight: 'bold', 
        color: styleColors.BRANCO, 
        alignSelf: 'center' 
    },
    btnHome: {
        paddingVertical: 30, 
        alignSelf: 'center', 
        flexDirection: 'row' 
    },
    borderColor(val) {
        return val ? 
        { borderBottomColor: styleColors.AZUL } : 
        { borderBottomColor: styleColors.CINZA_MEDIO }
    },
    labelColor(val) {
        return val ? { color: styleColors.AZUL} : 
                     { color: styleColors.CINZA_PLACE }
    },
})

export default styles;