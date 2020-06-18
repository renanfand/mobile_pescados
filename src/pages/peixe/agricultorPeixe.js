import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, } from 'react-native';
import styleIndex from '../../css/styleIndex';
import Swipeout from 'react-native-swipeout';
import RoutesUtil from '../../components/RoutesUtil';
import AlertsUtil from '../../components/AlertsUtil';

const TP_AGRICULTOR = 'P';

const Peixe = ({ navigation }) => {
    const constructor = navigation.state.params;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        loadItens();
    }, [constructor]);

    async function loadItens() {
        const response = await RoutesUtil.get('agricultores', TP_AGRICULTOR);

        if (response.data.error) {
            AlertsUtil.alertError(response.data.error.name, response.data.message);
        }
        else {
            setData(response.data);
        }
    }

    async function deleteItem(item) {
        
        const response = await RoutesUtil.delete('agricultor', item.id);
        
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
                <Swipeout right={btnRow(item)}>
                    <TouchableOpacity style={styleIndex.itemFlat} onPress={() => showPeixes(item)}>
                        <View>
                            <Text style={styleIndex.labelAgricultor}>Agricultor</Text>
                            <Text style={styleIndex.nomeAgricultor}>{item.nome}</Text>
                        </View>
                    </TouchableOpacity>
                </Swipeout>
            </View>
        )
    }

    function showPeixes(agricultor) {
        return navigation.navigate('Peixes', agricultor);
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

    function adicionar() {
        const agricultor = { tpAgricultor: TP_AGRICULTOR }
        navigation.navigate('DetalhesAgricultor', agricultor);
    }

    return (
        <View style={styleIndex.fundoItem}>
            <FlatList data={data}
                showsVerticalScrollIndicator={false}
                style={styleIndex.flat}
                renderItem={({ item }) => itemFlatList(item)}
                keyExtractor={(item) => JSON.stringify(item.id)} />

            <View>
                <TouchableOpacity style={[styleIndex.btnDefault, { marginBottom: 0 }]} onPress={() => adicionar()}>
                    <Text style={styleIndex.txtDefault}>ADICIONAR AGRICULTOR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Peixe;
