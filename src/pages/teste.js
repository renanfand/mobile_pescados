import React, { useRef } from 'react';
import { View, ScrollView } from 'react-native';
import styleIndex from '../assets/css/styleIndex'
import Button from '../components/Button';
import Input from '../components/UnFormInput';
import { Form } from '@unform/mobile';

const Teste = ({ navigation }) => {
    const formRef = useRef(null);

    function submit(params) {
        console.log(params)
    }

    return (
        <View style={styleIndex.fundo}>
            <Form ref={formRef} onSubmit={submit}>
                <ScrollView>
                    <Input name="email" label="E-mail" place="Digite seu e-mail" />
                    <Input name="senha" label="Senha" place="Digite sua senha" />

                    <Button label="Entrar" onPress={() => formRef.current.submitForm()} />
                </ScrollView>
            </Form>
        </View>
    );
};

export default Teste;