const cloud = require('./cloud');

function login(profile) {
  return new Promise((resolve, reject) => {
    wx.login({
      success() {
        cloud.callFunction('login', { profile })
          .then(result => {
            if (result && result.user) {
              wx.setStorageSync('currentUser', result.user);
            }
            resolve(result);
          })
          .catch(reject);
      },
      fail: reject
    });
  });
}

function getCurrentUser() {
  const app = getApp();
  return (app.globalData && app.globalData.user) || wx.getStorageSync('currentUser') || null;
}

function isAdmin(user) {
  return Boolean(user && user.role === 'admin' && user.status !== 'blocked');
}

module.exports = {
  login,
  getCurrentUser,
  isAdmin
};
