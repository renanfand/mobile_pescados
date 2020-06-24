import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styleIndex from '../css/styleIndex';

const Button = ({ label, onPress }) => {
    return (
        <View>
            <TouchableOpacity style={styleIndex.btnDefault} onPress={onPress}>
                <Text style={styleIndex.txtDefault}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;