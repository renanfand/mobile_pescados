import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, } from 'react-native';
import Swipeout from 'react-native-swipeout';

import styleIndex from '../../assets/css/styleIndex';
import styleColors from '../../assets/css/styleColors';

import Util from '../../components/Util';
import Button from '../../components/Button';
import Request from '../../components/Request';
import Spinners from '../../components/Spinner';

const Racoes = ({ navigation }) => {
    const agricultor = navigation.state.params;
    const [data, setData] = useState();
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        loadItens();
    }, [agricultor]);

    async function loadItens() {
        setSpinner(true);
        const response = await Request.get('racoes', agricultor.id);
        setSpinner(false);

        return response ? setData(response) : null;
    }

    async function deleteItem(item) {
        setSpinner(true);
        const response = await Request.delete('racao', item.id);
        setSpinner(false);
        
        return response ? loadItens() : null;
    }

    const btnRow = (item) => [
        {
            text: 'EXCLUIR',
            type: 'delete',
            autoClose: true,
            style: { paddingBottom: 20 },
            onPress: () => deleteItem(item),
        }
    ]

    function itemFlatList(item) {
        return (
            <View style={{ marginBottom: 10, }}>
                <Swipeout right={btnRow(item)}>
                    <TouchableOpacity style={styleIndex.itemFlat} onPress={() => detalheRacao(item)}>
                        <View>
                            <Text style={styleIndex.labelItemFlat}>Ração</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.tipo}</Text>

                            <Text style={[styleIndex.labelItemFlat, { marginTop: 10 }]}>Quantidade</Text>
                            <Text style={styleIndex.valueItemFlat}>{item.quantidade}</Text>
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
    
    function detalheRacao(item) {
        return navigation.navigate('DetalhesRacao', item);
    }

    function novoRacao(item) {
        return navigation.navigate('DetalhesRacao', { idAgricultor: item.id });
    }

    function showTotal() {
        let vTotal = 0;
        let qtdTotal = 0;

        if(data != null){
            data.map((val) => { vTotal += parseFloat(val.valTotal), qtdTotal += parseFloat(val.quantidade) });
        }
        
        return (
            <View style={styleIndex.componentTotal}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styleIndex.labelTotal}>Quant total:</Text>
                    <Text style={styleIndex.valueTotal}>{qtdTotal.toFixed(2)}</Text>
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
                keyExtractor={(item) => JSON.stringify(item.id)} 
            />
            
            <Button label="ADICIONAR RAÇÃO" onPress={() => novoRacao(agricultor)} />
        </View>
    );
};

Racoes.navigationOptions = ({ navigation }) => ({
    title: "Rações " + navigation.state.params.nome
});

export default Racoes;
