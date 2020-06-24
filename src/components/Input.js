import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import styleColors from '../css/styleColors';
import styleIndex from '../css/styleIndex';

const Input = ({label, placeholder, valor}) => {
    const [variavel, setVariavel] = useState(valor);

    useEffect(() => {
        console.log(variavel);
    }, [variavel]);
    
    return (
        <View style={styleIndex.componentInput}>
            <View style={styleIndex.containerInput}>
                <Text style={styleIndex.labelForm}>{label}</Text>
                
                <TextInput style={styleIndex.inputDefault}
                           placeholder={placeholder}
                           placeholderTextColor={styleColors.CINZA_MEDIO}
                           autoCapitalize="none"
                           autoCorrect={false}
                           value={variavel}
                           onChangeText={setVariavel}
                />
            </View>
        </View>
    );
};

export default Input;