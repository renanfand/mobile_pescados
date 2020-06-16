import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/pages/home'
import Teste from './src/pages/teste'

import AgricultorPeixe from './src/pages/peixe/agricultorPeixe'
import Peixes from './src/pages/peixe/peixes'
import DetalhesPeixe from './src/pages/peixe/detalhesPeixe'

import AgricultorRacao from './src/pages/racao/agricultorRacao'
import Racoes from './src/pages/racao/racoes'
import DetalhesRacao from './src/pages/racao/detalhesRacao'

import DetalhesAgricultor from './src/pages/agricultor/detalhesAgricultor'

import styleColors from './src/css/styleColors';

function styleHeader(title) {
    return ({
        headerTitle: title,
        headerTintColor: styleColors.BRANCO,
        headerStyle: {
            backgroundColor: styleColors.AZUL,
        }
    })
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => false
        }
    },
    Peixes: {
        screen: Peixes,
        navigationOptions: () => styleHeader()
    },
    DetalhesPeixe: {
        screen: DetalhesPeixe,
        navigationOptions: () => styleHeader()
    },
    Racoes: {
        screen: Racoes,
        navigationOptions: () => styleHeader()
    },
    DetalhesRacao: {
        screen: DetalhesRacao,
        navigationOptions: () => styleHeader()
    },
    AgricultorPeixe: {
        screen: AgricultorPeixe,
        navigationOptions: () => styleHeader('Agricultores de peixe')
    },
    AgricultorRacao: {
        screen: AgricultorRacao,
        navigationOptions: () => styleHeader('Agricultores de ração')
    },
    DetalhesAgricultor: {
        screen: DetalhesAgricultor,
        navigationOptions: (navigation) => styleHeader('Agricultor')
    },
    Teste: {
        screen: Teste,
        navigationOptions: () => styleHeader('Teste')
    }
});

export default createAppContainer(AppNavigator);