import React from 'react';
import { View, Image } from 'react-native';
import image from '../img/Pescados.png'
import styleIndex from '../css/styleIndex'
import Button from '../components/Button';

const Home = ({ navigation }) => {

    function handlePeixe() {
        navigation.navigate('AgricultorPeixe');
    }

    function handleRacao() {
        navigation.navigate('AgricultorRacao');
    }

    return (
        <View style={styleIndex.fundo}>
            <View style={styleIndex.containerImg}>
                <Image source={image} style={styleIndex.img} />
            </View>

            <View style={styleIndex.containerbtn}>
                <Button label="PEIXE" onPress={handlePeixe} />
                <View style={{ marginVertical: 12}}></View>
                <Button label="RAÇÃO" onPress={handleRacao} />
            </View>
        </View>
    );
};

export default Home;