const cloud = require('../../../utils/cloud');

Page({
  data: {
    summary: null
  },

  onLoad() {
    this.loadSummary();
  },

  loadSummary() {
    cloud.callFunction('admin', {
      action: 'analytics.summary'
    }).then(summary => {
      this.setData({ summary });
    }).catch(err => {
      console.error('Failed to load analytics', err);
      wx.showToast({ title: 'Load failed', icon: 'none' });
    });
  }
});
