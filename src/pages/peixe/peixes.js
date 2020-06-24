import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';

import Util from '../../components/Util';
import Button from '../../components/Button';
import Request from '../../components/Request';
import Spinners from '../../components/Spinner';

const Peixes = ({ navigation }) => {
    const agricultor = navigation.state.params;
    const [data, setData] = useState();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        loadItens();
    }, [agricultor]);

    async function loadItens() {
        setSpinner(true);
        const response = await Request.get('peixes', agricultor.id);
        setSpinner(false);

        return response ? setData(response) : null;
    }

    async function deleteItem(item) {
        setSpinner(true);
        const response = await Request.delete('peixe', item.id);
        setSpinner(false);

        return response ? loadItens() : null;
    }

    const btnRow = (item) => [
        {
            text: 'EXCLUIR',
            type: 'delete',
            autoClose: true,
            style: [{ paddingBottom: 20, fontWeight: 'bold' }],
            onPress: () => deleteItem(item),
        }
    ]

    function itemFlatList(item) {
        return (
            <View style={{ marginBottom: 10, }}>
                <Swipeout right={btnRow(item)}>
                    <TouchableOpacity style={styleIndex.itemFlat} onPress={() => detalhePeixe(item)}>
                        <View>
                            <Text style={styleIndex.labelItemFlat}>Peixe</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.tipoPeixe.nome}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Peso</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.peso}kg</Text>
                        </View>
                        <View style={{ borderLeftColor: styleColors.CINZA_MEDIO, borderLeftWidth: 2 }}></View>

                        <View style={styleIndex.itemFlatEnd}>
                            <Text style={styleIndex.labelItemFlat}>Data</Text>
                            <Text style={styleIndex.valueItemFlat}>{Util.ShowDate(item.data)}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Valor</Text>
                            <Text style={styleIndex.valueItemFlat}>R${item.valTotal}</Text>
                        </View>

                    </TouchableOpacity>
                </Swipeout>
            </View>
        )
    }

    function detalhePeixe(item) {
        return navigation.navigate('DetalhesPeixe', item);
    }

    function novoPeixe(item) {
        return navigation.navigate('DetalhesPeixe', { idAgricultor: item.id });
    }

    function showTotal() {
        let vTotal = 0;
        let pTotal = 0;

        if (data != null) {
            data.map((val) => { vTotal += parseFloat(val.valTotal), pTotal += parseFloat(val.peso) });
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
            <Spinners valSpinner={spinner} />
            {showTotal()}
            <FlatList data={data}
                showsVerticalScrollIndicator={false}
                style={styleIndex.flat}
                renderItem={({ item }) => itemFlatList(item)}
                keyExtractor={(item) => JSON.stringify(item.id)} />

            <Button label="ADICIONAR PEIXE" onPress={() => novoPeixe(agricultor)} />
        </View>
    );
};

Peixes.navigationOptions = ({ navigation }) => ({
    title: "Peixes " + navigation.state.params.nome
});

export default Peixes;




