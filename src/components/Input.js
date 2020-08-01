import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput } from 'react-native';

import styleColors from '../assets/css/styleColors';
import styleIndex from '../assets/css/styleIndex';

const Input = ({ label, placeholder, val, changeText, type }) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return (
        <>
            <View style={styleIndex.containerInput}>
                <Text style={styleIndex.labelForm}>{label}</Text>

                <TextInput style={[styleIndex.inputDefault, styleIndex.borderColor(isFocused)]}
                    placeholder={placeholder}
                    onChangeText={changeText}
                    keyboardType={type == 'number' ? "decimal-pad" : 'ascii-capable'}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    placeholderTextColor={styleColors.CINZA_PLACE}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={val}
                />
            </View>
        </>
    );
};

export default Input;