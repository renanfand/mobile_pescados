import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Picker, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';
import RoutesUtil from '../../components/RoutesUtil';
import AlertsUtil from '../../components/AlertsUtil';


const DetalhesPeixe = ({ navigation }) => {
    const peixe = navigation.state.params;

    const [tipo, setTipo] = useState();
    const [peso, setPeso] = useState(0);
    const [data, setData] = useState();
    const [valUnitario, setValUnitario] = useState("");
    const [idAgricultor, setIdAgricultor] = useState();
    const [valTotal, setValTotal] = useState(0);

    let i = 1;
    var dataPeixes = [
        { id: i++, label: 'Tilapia' },
        { id: i++, label: 'Carpa' },
        { id: i++, label: 'Outros' },
    ];

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
        if (peixe.peso) {
            setTipo(peixe.tipo);
            setPeso(peixe.peso);
            setData(new Date(peixe.data));
            setValUnitario(peixe.valUnitario);
            setValTotal(peixe.valTotal);
        }
        else {
            setIdAgricultor(peixe.id);
            setTipo(1);
            setData(new Date());
        }

    }

    async function salvar() {

        const params = { data, peso, valUnitario, valTotal: showValTotal(), idTipoPeixe: tipo, idAgricultor };
        console.log(params);

        const response = await RoutesUtil.post('peixe', params);

        if (response.data.error) {
            AlertsUtil.alertError(response.data.error.name, response.data.message);
        }
        else {
            Alert.alert('Ok', 'Peixe inserido com sucesso!');
            navigation.navigate('Peixes', {});
        }
    }

    function showValTotal() {
        return (peso && valUnitario ? peso * valUnitario.replace(",", ".") : 0).toFixed(2)
    }

    return (
        <View style={styleIndex.fundo}>
            <ScrollView style={styleIndex.componentInput}>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Tipo</Text>

                    <Picker selectedValue={tipo}
                        style={styleIndex.picker}
                        itemStyle={{ fontSize: 28 }}
                        itemTextStyle={{ fontSize: 28 }}
                        activeItemTextStyle={{ fontSize: 28, fontWeight: 'bold' }}
                        onValueChange={(val) => setTipo(val)}>

                        {dataPeixes.map(item => <Picker.Item key={item.id}
                            value={item.id}
                            label={item.label} />)}
                    </Picker>
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
                    <Text style={styleIndex.labelForm}>Peso (kg)</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="DIgite o peso"
                        placeholderTextColor={styleColors.CINZA_MEDIO}
                        keyboardType='decimal-pad'
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={peso}
                        onChangeText={setPeso}
                    />
                </View>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Valor unitario</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Digite o valor"
                        keyboardType='decimal-pad'
                        placeholderTextColor={styleColors.CINZA_MEDIO}
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={valUnitario}
                        onChangeText={setValUnitario}
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

DetalhesPeixe.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params ? "Editar peixe" : "Inserir peixe"
});

export default DetalhesPeixe;
