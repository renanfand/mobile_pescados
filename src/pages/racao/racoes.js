import React from 'react';
import { View, Text, TouchableOpacity, Alert, FlatList, } from 'react-native';
import Swipeout from 'react-native-swipeout';

import styleIndex from '../../css/styleIndex';
import styleColors from '../../css/styleColors';

const Racoes = ({ navigation }) => {
    const agricultor = navigation.state.params;

    let i = 0;
    const data = [
        { id: i++, tipo: 'Racao lend', quantidade: 231, valorTotal: 1281.10, valorUni: 45.0, data: '05/09/2020' },
        { id: i++, tipo: 'Racao lend', quantidade: 231, valorTotal: 1281.10, valorUni: 45.0, data: '05/09/2020' },
        { id: i++, tipo: 'Racao lend', quantidade: 231, valorTotal: 1281.10, valorUni: 45.0, data: '05/09/2020' },
        { id: i++, tipo: 'Racao lend', quantidade: 231, valorTotal: 1281.10, valorUni: 45.0, data: '05/09/2020' },
    ]

    const btnDel = (item) => [
        {
            text: 'EXCLUIR',
            type: 'delete',
            autoClose: true,
            style: { paddingBottom: 20 },
            onPress: () => deleteItem(item),
        }
    ]

    function deleteItem(item) {
        Alert.alert('Excluir', 'Deseja excluir o item: \n' + JSON.stringify(item))
    }

    function itemFlatList(item) {
        return (
            <View style={{ marginBottom: 10, }}>

                <Swipeout right={btnDel(item)}>
                    <TouchableOpacity style={styleIndex.itemFlat} onPress={() => detalhesRacao(item)}>

                        <View>
                            <Text style={styleIndex.labelItemFlat}>Ração</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.tipo}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Quantidade</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.quantidade}kg</Text>
                        </View>
                        <View style={{ borderLeftColor: styleColors.CINZA_MEDIO, borderLeftWidth: 2 }}></View>

                        <View style={styleIndex.itemFlatEnd}>
                            <Text style={styleIndex.labelItemFlat}>Data</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.data}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Valor</Text>
                            <Text style={styleIndex.valueItemFlat}>R${item.valorTotal}</Text>
                        </View>

                    </TouchableOpacity>
                </Swipeout>
            </View>
        )
    }

    function detalhesRacao(item) {
        if (item) {
            let racao = item
            return navigation.navigate('DetalhesRacao', racao);
        }

        return navigation.navigate('DetalhesRacao');
    }

    function showTotal() {
        let vTotal = 0;
        let qtdTotal = 0;
        data.map((val) => { vTotal += val.valorTotal, qtdTotal += val.quantidade });

        return (
            <View style={styleIndex.componentTotal}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styleIndex.labelTotal}>Quant total:</Text>
                    <Text style={styleIndex.valueTotal}>{qtdTotal.toFixed(2)}kg</Text>
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
                <TouchableOpacity style={[styleIndex.btnDefault, { marginBottom: 0 }]} onPress={() => detalhesRacao()}>
                    <Text style={styleIndex.txtDefault}>ADICIONAR RAÇÂO</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

Racoes.navigationOptions = ({ navigation }) => ({
    title: "Rações " + navigation.state.params.nome
});

export default Racoes;
