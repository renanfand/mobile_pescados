import React from 'react';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker'

import styleColors from '../assets/css/styleColors';
import styleIndex from '../assets/css/styleIndex';

const InputDate = ({ label, val, blur, changeText }) => {
    const styleDataPicker = {
        dateIcon: {
            display: 'none'
        },
        dateInput: {
            borderWidth: 0,
            marginTop: 30,
            marginBottom: 20,
            alignItems: 'flex-start',
            paddingLeft: 10
        },
        placeholderText: {
            color: styleColors.CINZA_ESCURO,
            fontSize: 18
        },
        dateText: {
            fontSize: 18,
        }
    }

    return (
        <>
            <View style={styleIndex.containerInput}>
                <Text style={styleIndex.labelForm}>{label}</Text>

                <DatePicker
                    style={styleIndex.dataPicker}
                    date={val}
                    onBlur={blur}
                    mode="date"
                    placeholder="Selecione a data"
                    format="DD/MM/YYYY"
                    confirmBtnText="Ok"
                    cancelBtnText="Cancelar"
                    customStyles={styleDataPicker}
                    onDateChange={(val, val2) => changeText(val)}
                />
            </View>
        </>
    );
};

export default InputDate;