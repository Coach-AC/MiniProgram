const cloud = require('./utils/cloud');
const auth = require('./utils/auth');

App({
  onLaunch() {
    cloud.initCloud();
    this.login();
  },

  login(profile) {
    if (!cloud.isCloudReady()) {
      console.warn('Set CLOUD_ENV_ID in utils/cloud.js after creating your Cloud Base environment.');
      return Promise.resolve(null);
    }

    return auth.login(profile).then(result => {
      this.globalData.user = result.user;
      this.globalData.openid = result.openid;
      return result;
    }).catch(err => {
      console.error('Login failed', err);
      return null;
    });
  },

  refreshProfile() {
    if (!cloud.isCloudReady()) {
      return Promise.resolve(null);
    }

    return cloud.callFunction('getProfile').then(result => {
      this.globalData.user = result.user;
      wx.setStorageSync('currentUser', result.user);
      return result;
    });
  },

  onError(msg) {
    console.log(msg);
  },

  globalData: {
    user: null,
    openid: ''
  }
});
