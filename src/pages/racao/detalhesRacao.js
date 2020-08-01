import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'

import styleIndex from '../../assets/css/styleIndex';
import styleColors from '../../assets/css/styleColors';

import AlertsUtil from '../../components/AlertsUtil';
import Util from '../../components/Util';
import Button from '../../components/Button';
import Request from '../../components/Request';
import Spinners from '../../components/Spinner';

const DetalhesRacao = ({ navigation }) => {
    const objParam = navigation.state.params;
    const isEditando = !!objParam.quantidade;
    const { idAgricultor } = navigation.state.params;

    const [tipo, setTipo] = useState();
    const [quantidade, setQuantidade] = useState();
    const [data, setData] = useState(null);
    const [valUnitario, setValorUni] = useState();
    const [valorTotal, setValTotal] = useState();
    const [spinner, setSpinner] = useState(false);

    const styleDataPicker = {
        dateIcon: {
            display: 'none'
        },
        dateInput: {
            borderWidth: 0,
            marginTop: 30,
            marginBottom: 20,
            alignItems: 'flex-start',
            paddingLeft: 10
        },
        placeholderText: {
            color: styleColors.CINZA_ESCURO,
            fontSize: 18
        },
        dateText: {
            fontSize: 18,
        }
    }

    useEffect(() => {
        setValues();
    }, []);

    function setValues() {
        if (isEditando) {
            setTipo(objParam.tipo);
            setData(Util.Date(objParam.data));
            setQuantidade(JSON.stringify(objParam.quantidade));
            setValorUni(objParam.valUnitario);
            setValTotal(objParam.valorTotal);
        }
        else {
            setData(Util.Date());
        }
    }

    function organizaParams() {
        return {
            data,
            tipo: tipo ? Util.valor(tipo) : null,
            quantidade: quantidade ? Util.valor(quantidade) : null,
            valUnitario: valUnitario ? Util.valor(valUnitario) : null,
            valTotal: showValTotal(),
            idAgricultor
        };
    }

    async function salvar() {
        const params = organizaParams();
        
        setSpinner(true);
        let response = await Request.post('racao', params);
        setSpinner(false);

        if (response) {
            AlertsUtil.toast('Ração inserida com sucesso!');
            return navigation.navigate('Racoes', {});
        }
    }

    async function editar() {
        const params = organizaParams();
        
        setSpinner(true);
        let response = await Request.put(`racao/${objParam.id}`, params);
        setSpinner(false);

        if (response) {
            AlertsUtil.toast('Ração atualizada com sucesso!');
            return navigation.navigate('Racoes', {});
        }
    }

    function showValTotal() {
        return (quantidade && valUnitario ? quantidade * Util.valor(valUnitario) : 0).toFixed(2)
    }

    return (
        <View style={styleIndex.fundo}>
            <Spinners valSpinner={spinner} />
            
            <ScrollView style={styleIndex.componentInput}>
                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Tipo</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Tipo da ração"
                        placeholderTextColor={styleColors.CINZA_MEDIO}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={tipo}
                        onChangeText={setTipo}
                    />

                </View>

                <View style={styleIndex.containerInput}>

                    <Text style={styleIndex.labelForm}>Data</Text>
                    <DatePicker
                        style={styleIndex.dataPicker}
                        date={data}
                        mode="date"
                        placeholder="Selecione a data"
                        format="DD/MM/YYYY"
                        confirmBtnText="Ok"
                        cancelBtnText="Cancelar"
                        customStyles={styleDataPicker}
                        onDateChange={(val, valNotFormat) => setData(valNotFormat)}
                    />
                </View>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Quantidade (saco)</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Digite a quantidade de sacos"
                        placeholderTextColor={styleColors.CINZA_MEDIO}
                        keyboardType='decimal-pad'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={quantidade}
                        onChangeText={setQuantidade}
                    />
                </View>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Valor unitário</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Digite o valor do saco"
                        keyboardType='decimal-pad'
                        placeholderTextColor={styleColors.CINZA_MEDIO}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={valUnitario}
                        onChangeText={setValorUni}
                    />
                </View>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Valor total</Text>
                    <Text style={styleIndex.valueItemFlat}>R${showValTotal()}</Text>
                </View>
            </ScrollView>

            <Button label={isEditando ? "EDITAR" : "SALVAR"} 
                    onPress={isEditando ? editar : salvar} />
        </View>
    );
}

DetalhesRacao.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? "Editar ração" : "Inserir ração"
});

export default DetalhesRacao;
