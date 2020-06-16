import React from 'react';
import { View, Text, TouchableOpacity, Alert, Image, } from 'react-native';

import styleIndex from '../css/styleIndex'
import image from '../img/logo.png'

const Home = ({navigation}) => {

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
                <TouchableOpacity style={styleIndex.btnDefault} onPress={() => handlePeixe()}>
                    <Text style={styleIndex.txtDefault}>Peixe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styleIndex.btnDefault} onPress={() => handleRacao()}>
                    <Text style={styleIndex.txtDefault}>Ração</Text>
                </TouchableOpacity>

            </View>

        </View>
    );
};

export default Home;