import api from '../services/api';

export default {
  async post(url, params) {
    return await api.post(url, params);
  },
  
  async get(url, params) {
    
    if(params){
      return await api.get(`${url}/${params}`);
    }

    return await api.get(url);
  },
  
  async put(url, params) {
    return await api.put(url, params);
  },

  async delete(url, id) {
    return await api.delete(url+'/'+id);
  }
  
}
