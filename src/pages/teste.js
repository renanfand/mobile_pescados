import React from 'react';
import { View, ScrollView } from 'react-native';
import styleIndex from '../css/styleIndex'
import Button from '../components/Button';
import Input from '../components/Input';
import InputDate from '../components/InputDate';
import { Formik } from 'formik';

const Teste = ({ navigation }) => {

    function submit(params) {
        console.log(params)
    }

    function parametros() {
        return { nome: '', email: '', senha: '', confirmPass: '', data: '' };
    }

    return (
        <View style={styleIndex.fundo}>
            <Formik initialValues={ parametros() } onSubmit={(params) => submit(params)}>
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <ScrollView>
                            <Input changeText={handleChange('nome')} label={"Nome"} type={"number"} val={values.nome} placeholder={"Digite seu nome"} />
                            <InputDate changeText={handleChange('data')} label={"Data inicial"} val={values.data} />
                            <Input changeText={handleChange('email')} label={"E-mail"} val={values.email} placeholder={"Digite seu e-mail"} />
                            <Input changeText={handleChange('senha')} label={"Senha"} val={values.senha} placeholder={"Digite sua senha"} />
                            <Input changeText={handleChange('confirmPass')} label={"Confirmar senha"} val={values.confirmPass} placeholder={"Digite novamente sua senha"} />
                        </ScrollView>

                        <Button onPress={handleSubmit} label="Salvar" />
                    </>
                )}
            </Formik>
        </View>
    );
};

export default Teste;