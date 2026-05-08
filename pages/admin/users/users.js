const cloud = require('../../../utils/cloud');

Page({
  data: {
    users: []
  },

  onLoad() {
    this.loadUsers();
  },

  loadUsers() {
    cloud.callFunction('admin', {
      action: 'user.list'
    }).then(result => {
      this.setData({ users: result.users || [] });
    }).catch(err => {
      console.error('Failed to load users', err);
      wx.showToast({ title: 'Load failed', icon: 'none' });
    });
  },

  toggleStatus(e) {
    const user = e.currentTarget.dataset.user;
    const status = user.status === 'blocked' ? 'active' : 'blocked';

    cloud.callFunction('admin', {
      action: 'user.status',
      payload: {
        openid: user.openid,
        status
      }
    }).then(() => {
      wx.showToast({ title: 'Updated', icon: 'success' });
      this.loadUsers();
    });
  }
});
