import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';

const DetalhesRacao = ({ navigation }) => {
    const racao = navigation.state.params;

    const [tipo, setTipo] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [data, setData] = useState();
    const [valorUni, setValorUni] = useState("");
    const [valorTotal, setValorTotal] = useState(0);

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
        if (racao) {
            setTipo(racao.tipo);
            setQuantidade(JSON.stringify(racao.quantidade));
            setData(racao.data);
            setValorUni(JSON.stringify(racao.valorUni));
            setValorTotal(JSON.stringify(racao.valorTotal));
        }
        else {
            setData(new Date());
        }
    }

    function validaParams() {
        setValorTotal((quantidade * valorUni.replace(",",".")).toFixed(2));
    }

    function salvar() {
        validaParams();
        Alert.alert('Salvar Ração', `Tipo: ${tipo}\nData: ${data}\nQuantidade: ${quantidade}\nValorUnitario: R$${valorUni}\nValorTotal: R$${quantidade * valorUni}`);
    }

    function showValTotal() {
        return (quantidade && valorUni ? quantidade * valorUni.replace(",",".") : 0).toFixed(2)
    }

    return (
        <View style={styleIndex.fundo}>
            <ScrollView style={styleIndex.componentInput}>
                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Tipo</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Tipo da ração"
                        keyboardType='decimal-pad'
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
                        onDateChange={(val) => setData(val)}
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
                        value={valorUni}
                        onChangeText={setValorUni}
                    />
                </View>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Valor total</Text>
                    <Text style={styleIndex.valueItemFlat}>R${showValTotal()}</Text>
                </View>
            </ScrollView>

            <View>
                <TouchableOpacity style={[styleIndex.btnDefault, { marginBottom: 0 }]} onPress={() => salvar()}>
                    <Text style={styleIndex.txtDefault}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

DetalhesRacao.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? "Editar ração" : "Inserir ração"
});

export default DetalhesRacao;
