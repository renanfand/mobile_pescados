import React from 'react';
import { View, Image } from 'react-native';

import image from '../img/logo.png'
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
                <View style={{ paddingBottom: 15 }}></View>
                <Button label="RAÇÃO" onPress={handleRacao} />
            </View>
        </View>
    );
};

export default Home;