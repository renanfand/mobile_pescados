import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';

import styleColors from '../css/styleColors';
import styleIndex from '../css/styleIndex';

const Input = ({ label, placeholder, val, blur, focus, changeText, type }) => {

    return (
        <>
            <View style={styleIndex.containerInput}>
                <Text style={styleIndex.labelForm}>{label}</Text>

                <TextInput style={styleIndex.inputDefault}
                    placeholder={placeholder}
                    onChangeText={changeText}
                    keyboardType={type == 'number' ? "decimal-pad" : 'default'}
                    onBlur={blur}
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