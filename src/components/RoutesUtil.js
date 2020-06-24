import api from '../services/api';
import AlertsUtil from './AlertsUtil';

export default {
  async post(url, params) {
    try {
      return await api.post(url, params);
    }
    catch (error) {
      AlertsUtil.alertDefault("Ops...", error.message || error);
    }
  },

  async get(url, params) {
    try {
      if (params) {
        return await api.get(`${url}/${params}`);
      }
      return await api.get(url);
    }
    catch (error) {
      AlertsUtil.alertDefault("Ops...", error.message || error);
    }
  },

  async put(url, params) {
    try {
      return await api.put(url, params);
    }
    catch (error) {
      AlertsUtil.alertDefault("Ops...", error.message || error);
    }
  },

  async delete(url, id) {
    try {
      return await api.delete(url + '/' + id);
    }
    catch (error) {
      AlertsUtil.alertDefault("Ops...", error.message || error);
    }
  }

}
