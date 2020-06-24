import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, } from 'react-native';
import styleIndex from '../../css/styleIndex';
import Swipeout from 'react-native-swipeout';

import Button from '../../components/Button';
import Request from '../../components/Request';
import Spinners from '../../components/Spinner';

const TP_AGRICULTOR = 'R';

const AgricultorRacao = ({navigation}) => {
    const constructor = navigation.state.params;
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false);
    
    useEffect(() => {
        loadItens();
    }, [constructor]);

    async function loadItens() {
        setSpinner(true);
        const response = await Request.get('agricultores', TP_AGRICULTOR);
        setSpinner(false);

        return response ? setData(response) : null;
    }

    function itemFlatList(item) {
        return (
            <View style={{ marginBottom: 10, }}>
                <Swipeout right={btnDel(item)}>
                    <TouchableOpacity style={styleIndex.itemFlat} onPress={() => showRacoes(item)}>
                        <View>
                            <Text style={styleIndex.labelAgricultor}>Agricultor</Text>
                            <Text style={styleIndex.nomeAgricultor}>{item.nome}</Text>
                        </View>
                    </TouchableOpacity>
                </Swipeout>
            </View>
        )
    }

    async function deleteItem(item) {
        setSpinner(true);
        const response = await Request.delete('agricultor', item.id);        
        setSpinner(false);
        
        return response ? loadItens() : null;
    }

    function showRacoes(agricultor) {
        return navigation.navigate('Racoes', agricultor);
    }

    const btnDel = (item) => [
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
            <Spinners valSpinner={spinner} />
            
            <FlatList data={data}
                showsVerticalScrollIndicator={false}
                style={styleIndex.flat}
                renderItem={({ item }) => itemFlatList(item)}
                keyExtractor={(item) => JSON.stringify(item.id)} />

            <Button label="ADICIONAR AGRICULTOR" onPress={adicionar} />
        </View>
    );
};


export default AgricultorRacao;
