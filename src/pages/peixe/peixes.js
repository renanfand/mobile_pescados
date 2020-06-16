import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList, TouchableHighlight, } from 'react-native';
import Swipeout from 'react-native-swipeout';

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';
import RoutesUtil from '../../components/RoutesUtil';
import AlertsUtil from '../../components/AlertsUtil';

const Peixes = ({navigation}) => {
    const agricultor = navigation.state.params;
    const [data, setData] = useState();

    useEffect(() => {
        loadItens();
    }, [agricultor]);

    async function loadItens() {
        const response = await RoutesUtil.get('peixes', agricultor.id);

        if (!response) {
            Alert.alert('Erro', 'Erro');
        }
        else {
            setData(response.data);
        }
    }

    const btnDel = (item) => [
        {
            text: 'EXCLUIR',
            type: 'delete',
            autoClose: true,
            style: [{paddingBottom: 20, fontWeight: 'bold'}],
            onPress: () => deleteItem(item),
        }
    ]

    async function deleteItem(item) {
        const response = await RoutesUtil.delete('peixe', item.id);
        
        if (response.data.error) {
            AlertsUtil.alertError(response.data.error.name, response.data.message);
        }
        else {
            loadItens();
        }
    }

    function itemFlatList(item) {
        return (
            <View style={{ marginBottom: 10, }}>

                <Swipeout right={btnDel(item)}>
                    <TouchableOpacity style={styleIndex.itemFlat} onPress={() => detalhePeixe(item)}>

                        <View>
                            <Text style={styleIndex.labelItemFlat}>Peixe</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.idTipoPeixe}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Peso</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.peso}kg</Text>
                        </View>
                        <View style={{ borderLeftColor: styleColors.CINZA_MEDIO, borderLeftWidth: 2 }}></View>

                        <View style={styleIndex.itemFlatEnd}>
                            <Text style={styleIndex.labelItemFlat}>Data</Text>
                            <Text style={styleIndex.valueItemFlat}>{formatDate(item.data)}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Valor</Text>
                            <Text style={styleIndex.valueItemFlat}>R${item.valTotal}</Text>
                        </View>

                    </TouchableOpacity>
                </Swipeout>
            </View>
        )
    }

    function formatDate(data) {   
        return new Date(data).toDateString();
    }

    function detalhePeixe(item) {
        if (item) {
            let peixe = item
            return navigation.navigate('DetalhesPeixe', peixe);
        }

        return navigation.navigate('DetalhesPeixe');
    }

    function showTotal() {
        let vTotal = 0;
        let pTotal = 0;
        
        if(data != null) {
            data.map((val) => { vTotal +=  parseFloat(val.valTotal),
                                pTotal += parseFloat(val.peso)
            });
        }

        return (
            <View style={styleIndex.componentTotal}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styleIndex.labelTotal}>Peso total:</Text>
                    <Text style={styleIndex.valueTotal}>{pTotal.toFixed(2)}kg</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styleIndex.labelTotal}>Valor total:</Text>
                    <Text style={styleIndex.valueTotal}>{vTotal.toFixed(2)}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styleIndex.fundoItem}>
          
            {showTotal()}

            <FlatList data={data}
                showsVerticalScrollIndicator={false}
                style={styleIndex.flat}
                renderItem={({ item }) => itemFlatList(item)}
                keyExtractor={(item) => JSON.stringify(item.id)} />

            <View style={{}}>
                <TouchableOpacity style={[styleIndex.btnDefault, { marginBottom: 0 }]} onPress={() => detalhePeixe(agricultor)}>
                    <Text style={styleIndex.txtDefault}>ADICIONAR PEIXE</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

Peixes.navigationOptions = ({ navigation }) => ({
    title: "Peixes " + navigation.state.params.nome
});

export default Peixes;




