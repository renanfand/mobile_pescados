import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styleIndex from '../css/styleIndex';
import LinearGradient from 'react-native-linear-gradient'

const Button = ({ label, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
                <LinearGradient colors={['#4c5dc8', '#263073']} style={styleIndex.btnDefault} >
                    <Text style={styleIndex.txtDefault}>{label}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default Button;