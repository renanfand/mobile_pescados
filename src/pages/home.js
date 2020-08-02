import React from 'react';
import { View, Image, Text } from 'react-native';
import image from '../assets/img/logo1.png'
import ImgPeixe from '../assets/img/iconPeixe.png';
import ImgRacao from '../assets/img/iconRacao.png';
import ImgDivizao from '../assets/img/divizor.png';
import styleIndex from '../assets/css/styleIndex';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styleColors from '../assets/css/styleColors';

const Home = ({ navigation }) => {

    function handlePeixe() {
        navigation.navigate('AgricultorPeixe');
    }

    function handleRacao() {
        navigation.navigate('AgricultorRacao');
    }

    function handleTeste() {
        navigation.navigate('Teste');
    }

    function button(label, action, img) {
        return (
            <TouchableOpacity onPress={action} style={styleIndex.btnHome}>
                <Image source={img} resizeMode="contain" style={styleIndex.imgIcon} />
                <Text style={styleIndex.txtBtnHome}>{label}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={[styleIndex.fundo, { backgroundColor: styleColors.AZUL }]}>
            <Image source={image} resizeMode="contain" style={styleIndex.img} />

            <View style={styleIndex.containerbtn}>
                {button("Peixe", handlePeixe, ImgPeixe)}
                <Image source={ImgDivizao} resizeMode="contain" style={styleIndex.imgDivizor} />
                {button("Ração", handleRacao, ImgRacao)}
            </View>
        </View>
    );
};

export default Home;

