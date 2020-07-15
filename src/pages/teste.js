import React from 'react';
import { View, ScrollView } from 'react-native';
import styleIndex from '../assets/css/styleIndex'
import Button from '../components/Button';
import Input from '../components/Input';
import Date from '../components/InputDate';
import { Formik } from 'formik';

const Teste = ({ navigation }) => {

    function submit(params) {
        console.log(params)
    }

    function parametros() {
        return { numero: '', nome: '', senha: '', confirmPass: '', data: '' };
    }

    return (
        <View style={styleIndex.fundo}>
            <Formik initialValues={ parametros() } onSubmit={(params) => submit(params)}>
                {({ handleChange, handleSubmit, values }) => (
                    <>
                        <ScrollView>
                            <Input changeText={handleChange('numero')} 
                                   label={"Número:"} 
                                   type={"number"} 
                                   val={values.numero} 
                                   placeholder={"Digite o número da sua casa"} />
                            
                            <Input changeText={handleChange('nome')} 
                                   label={"Nome:"}
                                   val={values.nome}
                                   placeholder={"Digite o seu nome"} />
                            
                            <Date changeText={handleChange('data')}
                                  label={"Data inicial:"}
                                  val={values.data} />
                            
                            <Input changeText={handleChange('email')}
                                   label={"E-mail:"}
                                   val={values.email}
                                   placeholder={"Digite seu e-mail"} />

                            <Input changeText={handleChange('senha')}
                                   label={"Senha:"}
                                   val={values.senha}
                                   placeholder={"Digite sua senha"} />
                            
                            <Input changeText={handleChange('confirmPass')}
                                   label={"Confirmar senha:"}
                                   val={values.confirmPass}
                                   placeholder={"Digite novamente sua senha"} />                            

                        </ScrollView>

                        <Button onPress={handleSubmit} label="Salvar" />
                    </>
                )}
            </Formik>
        </View>
    );
};

export default Teste;