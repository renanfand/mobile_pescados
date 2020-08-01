import React, { useEffect, useRef, useState, useCallback } from 'react';

import styleColors from '../assets/css/styleColors';
import styleIndex from '../assets/css/styleIndex';

import { TextInput, View, Text } from 'react-native';
import { useField } from '@unform/core';

function Input({ name, label, place, type, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error, } = useField(name);

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    useEffect(() => {
        inputRef.current.value = defaultValue;
    }, [defaultValue]);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = '';
                ref.clear();
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            getValue(ref) {
                return ref.value;
            },
        });
    }, [fieldName, registerField]);

    return (
        <>
            <View style={styleIndex.containerInput}>
                <Text style={[styleIndex.labelForm, styleIndex.labelColor(isFocused) ]}>{label}</Text>

                <TextInput style={[styleIndex.inputDefault, styleIndex.borderColor(isFocused)]}
                    placeholder={place}
                    keyboardType={type == 'number' ? "decimal-pad" : 'ascii-capable'}
                    onFocus={handleInputFocus}
                    ref={inputRef}
                    onBlur={handleInputBlur}
                    placeholderTextColor={styleColors.CINZA_PLACE}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={value => {
                        inputRef.current ? inputRef.current.value = value : null
                    }}
                    {...rest}
                />
            </View>
        </>

    );
};

export default Input;