import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styleIndex from '../css/styleIndex';
import LinearGradient from 'react-native-linear-gradient'

const Button = ({ label, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styleIndex.btnDefault} >
                <Text style={styleIndex.txtDefault}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;