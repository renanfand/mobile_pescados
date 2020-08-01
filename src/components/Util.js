import moment from 'moment';
import AlertsUtil from './AlertsUtil'
export default {
  ShowDate(data) {
    return moment(data).format('DD/MM/YYYY');
  }
  ,
  Date(data) {
    return data ? new Date(moment(data).format('L')) :
                  new Date(moment().format('L'));
  }
  ,
  valor(val) {
    return val.replace(/,/g, ".");
  }
  ,
  validate(params) {
    let vetAux = [];
    
    for (const val in params) {
      const ele = params[val];
      
      if(ele == null || ele == undefined || ele == ''){
        vetAux.push(ele);
      }
    }

    if(vetAux.length > 0) {
      AlertsUtil.alertDefault('Atenção', 'Todos os campos devem ser preenchidos!');
      return false;
    }

    return true;
  },
}
