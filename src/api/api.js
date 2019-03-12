import request from '../axios/request';

export default {
  checkUserName (userName) {
    return request({
      url: '',
      method: 'get'
    });
  },

  checkUserPhoneNumber (phoneNumber) {
    return request({
      url: 'login',
      method: 'get'
    });
  }
};
