import AlertsUtil from './AlertsUtil';
import api from '../services/api';
import Util from './Util';

export default {

    async post(url, params) {
        try {
            if(Util.validate(params)) {
                let response = await api.post(url, params);
                return this.returnDefault(response);
            }
        }
        catch (error) {
            AlertsUtil.alertError(error.name, error.message || error);
        }
    },

    async get(url, params) {
        try {   
            if (params) {
                const response = await api.get(`${url}/${params}`);
                return this.returnDefault(response);
            }
            else {
                const response = await api.get(url);
                return this.returnDefault(response);
            }
        }
        catch (error) {
            AlertsUtil.alertError(error.name, error.message || error);
        }
    },

    async put(url, params) {
        try {
            if(Util.validate(params)) {
                const response = await api.put(url, params);
                return this.returnDefault(response);
            }
        }
        catch (error) {
            AlertsUtil.alertError(error.name, error.message || error);
        }
    },

    async delete(url, id) {
        try {
            const response = await api.delete(url + '/' + id);
            return this.returnDefault(response);
        }
        catch (error) {
            AlertsUtil.alertError(error.name, error.message || error);
        }
    },

    returnDefault (response) {
        if (response.data.error) {
            return AlertsUtil.alertError(response.data.error.name, response.data.message);
        }
        else {
            return response.data || response;
        }    
    }
};
