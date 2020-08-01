import React from 'react';
import { View, Image, Text } from 'react-native';
import image from '../assets/img/logo1.png'
import ImgPeixe from '../assets/img/iconPeixe.png';
import ImgRacao from '../assets/img/iconRacao.png';
import ImgDivizao from '../assets/img/divizor.png';
import styleIndex from '../assets/css/styleIndex';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

    return (
        <View style={styleIndex.fundo}>
            <View style={styleIndex.containerImg}>
                <Image source={image} style={styleIndex.img} />
            </View>

            <View style={styleIndex.containerbtn}>
                <TouchableOpacity onPress={handlePeixe}
                    style={{ padding: 40, alignItems: 'center', flexDirection: 'row' }}>
                    
                    <Image source={ImgPeixe} style={styleIndex.imgIcon} />
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fff' }}>Peixe</Text>
                </TouchableOpacity>

                <Image source={ImgDivizao} style={styleIndex.imgDivizor} />

                <TouchableOpacity onPress={handleRacao}
                    style={{ padding: 40, alignItems: 'center', flexDirection: 'row' }}>
                    
                    <Image source={ImgRacao} style={styleIndex.imgIcon} />
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#fff' }}>Ração</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Home;