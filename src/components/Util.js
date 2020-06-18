import moment from 'moment';

export default {
  ShowDate(data) {
    return moment(data).format('DD/MM/YYYY');
  },
  Date(data) {
    return data ? new Date(moment(data).format('L')) :
                  new Date(moment().format('L'));
  },
  valor(val) {
    return val.replace(/,/g, ".");
  }
}
