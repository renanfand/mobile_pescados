import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native';

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';
import RoutesUtil from '../../components/RoutesUtil';

const DetalhesRacao = ({ navigation }) => {
    const { tpAgricultor } = navigation.state.params;

    const [nome, setNome] = useState();

    useEffect(() => {

    }, []);

    async function salvar() {
        const params = { nome, tpAgricultor };
        const response = await RoutesUtil.post('agricultor', params);

        if (!response) {
            Alert.alert('Erro', 'Erro');
        }
        else {
            setNome('');
            Alert.alert('Ok', 'Agricultor inserido com sucesso!');
        }
    }

    return (
        <View style={styleIndex.fundo}>
            <View>
                <Text style={styleIndex.titulo}>Inserir Agricultor</Text>
            </View>

            <View style={styleIndex.componentInput}>
                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Nome</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Digite o nome do agricultor"
                        placeholderTextColor={styleColors.CINZA_MEDIO}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>
            </View>

            <View>
                <TouchableOpacity style={styleIndex.btnDefault} onPress={() => salvar()}>
                    <Text style={styleIndex.txtDefault}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default DetalhesRacao;
