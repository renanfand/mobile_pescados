import React from 'react';
import styleSpinner from '../assets/css/styleSpinner';
import Spinner from 'react-native-loading-spinner-overlay';

const Spinners = ({ valSpinner }) => {
    return ( 
        <Spinner animation="fade" 
                 visible={valSpinner} 
                 textContent={'Carregando...'} 
                 textStyle={styleSpinner.spinner} 
                 size="large" 
                 overlayColor="rgba(0, 0, 0, 0.6)" /> 
    );
};

export default Spinners;