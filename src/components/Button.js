import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styleIndex from '../assets/css/styleIndex';
import LinearGradient from 'react-native-linear-gradient'

const Button = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styleIndex.btnDefault} >
            <Text style={styleIndex.txtDefault}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button;