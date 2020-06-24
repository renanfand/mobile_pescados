import React, { useState, useEffect } from 'react';
import { View, Text, Picker, TextInput, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';

import AlertsUtil from '../../components/AlertsUtil';
import Util from '../../components/Util';
import Button from '../../components/Button';
import Request from '../../components/Request';
import Spinners from '../../components/Spinner';


const DetalhesPeixe = ({ navigation }) => {
    const objParam = navigation.state.params;
    const isEditando = !!objParam.peso;
    const { idAgricultor } = navigation.state.params;

    const [data, setData] = useState();
    const [dataPeixes, setDataPeixes] = useState([]);
    const [peso, setPeso] = useState(0);
    const [tipo, setTipo] = useState();
    const [valUnitario, setValUnitario] = useState(0);
    const [valTotal, setValTotal] = useState(0);
    const [spinner, setSpinner] = useState(0);

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
        loadPeixes();
        setValues();
    }, []);

    async function loadPeixes() {
        setSpinner(true)
        const response = await Request.get('tipopeixe');
        setSpinner(false);

        return response ? setDataPeixes(response) : null;
    }

    function setValues() {
        if (isEditando) {
            setTipo(objParam.idTipoPeixe);
            setPeso(objParam.peso);
            setData(Util.Date(objParam.data));
            setValUnitario(objParam.valUnitario);
            setValTotal(objParam.valTotal);
        }
        else {
            setData(Util.Date());
        }
    }

    function organizaParams() {
        return  {   data, 
                    peso: peso ? Util.valor(peso) : 0, 
                    valUnitario: valUnitario ? Util.valor(valUnitario) : 0, 
                    valTotal: showValTotal(), 
                    idTipoPeixe: tipo, 
                    idAgricultor 
                };
    }

    async function salvar() {
        const params = organizaParams();
        let response = null;

        isEditando ? response = await Request.put(`peixe/${objParam.id}`, params) :
                     response = await Request.post('peixe', params);
        
        if (response) {
            isEditando ? AlertsUtil.toast('Peixe atualizado com sucesso!') :
                         AlertsUtil.toast('Peixe inserido com sucesso!');
            
            return navigation.navigate('Peixes', {});
        }
    }

    function showValTotal() {
        return (peso && valUnitario ? Util.valor(peso) * Util.valor(valUnitario) : 0).toFixed(2);
    }

    return (
        <View style={styleIndex.fundo}>
            <Spinners valSpinner={spinner} />
            <ScrollView style={styleIndex.componentInput}>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Tipo</Text>

                    <Picker selectedValue={tipo}
                        style={styleIndex.picker}
                        itemStyle={{ fontSize: 28 }}
                        itemTextStyle={{ fontSize: 28 }}
                        activeItemTextStyle={{ fontSize: 28, fontWeight: 'bold' }}
                        onValueChange={(val) => setTipo(val)}>

                        {dataPeixes.map((item) => <Picker.Item key={item.id} value={item.id} label={item.nome} />)}
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
                        onDateChange={(val, valNotFormat) => setData(valNotFormat)}
                    />
                </View>

                <View style={styleIndex.containerInput}>
                    <Text style={styleIndex.labelForm}>Peso (kg)</Text>
                    <TextInput style={styleIndex.inputDefault}
                        placeholder="Digite o peso"
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

            <Button label={"SALVAR"} onPress={salvar} />
        </View>
    );
}

DetalhesPeixe.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.peso ? "Editar peixe" : "Inserir peixe"
});

export default DetalhesPeixe;
