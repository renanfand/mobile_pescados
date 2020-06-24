import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styleIndex from '../../css/styleIndex';
import AlertsUtil from '../../components/AlertsUtil';
import Request from '../../components/Request';
import styleColors from '../../css/styleColors';

import Spinners from '../../components/Spinner';
import Buttom from '../../components/Button';

const DetalhesRacao = ({ navigation }) => {
    const { tpAgricultor } = navigation.state.params;
    const [nome, setNome] = useState();
    const [spinner, setSpinner] = useState(false);

    async function salvar() {
        const param = { nome, tpAgricultor };
        
        setSpinner(true);
        const response = await Request.post('agricultor', param);
        setSpinner(false);

        if (response) {
            voltarAgricultor();
            AlertsUtil.toast('Agricultor inserido com sucesso!');
        }
    }

    function voltarAgricultor() {
        switch (tpAgricultor) {
            case 'R':
                navigation.navigate('AgricultorRacao', {});
                break;
            case 'P':
                navigation.navigate('AgricultorPeixe', {});
                break;
        }
    }

    return (
        <View style={styleIndex.fundo}>
            <Spinners valSpinner={spinner} />
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

            <Buttom label="SALVAR" onPress={salvar} />
        </View>
    );
}

export default DetalhesRacao;
