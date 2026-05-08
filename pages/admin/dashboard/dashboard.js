const cloud = require('../../../utils/cloud');
const auth = require('../../../utils/auth');

Page({
  data: {
    user: null,
    summary: null
  },

  onLoad() {
    const user = auth.getCurrentUser();
    if (!auth.isAdmin(user)) {
      wx.showToast({
        title: 'Admin only',
        icon: 'none'
      });
      setTimeout(() => wx.navigateBack(), 800);
      return;
    }

    this.setData({ user });
    this.loadSummary();
  },

  loadSummary() {
    if (!cloud.isCloudReady()) return;

    cloud.callFunction('admin', {
      action: 'analytics.summary'
    }).then(summary => {
      this.setData({ summary });
    }).catch(err => {
      console.error('Failed to load admin summary', err);
    });
  },

  goVideos() {
    wx.navigateTo({ url: '/pages/admin/videos/videos' });
  },

  goUsers() {
    wx.navigateTo({ url: '/pages/admin/users/users' });
  },

  goAnalytics() {
    wx.navigateTo({ url: '/pages/admin/analytics/analytics' });
  },

  seedDefaults() {
    wx.showModal({
      title: 'Seed Data',
      content: 'Create or update default videos and challenges in Cloud Database?',
      success: (res) => {
        if (!res.confirm) return;
        cloud.callFunction('admin', { action: 'seed.defaults' }).then(() => {
          wx.showToast({ title: 'Seeded', icon: 'success' });
          this.loadSummary();
        }).catch(err => {
          console.error('Seed failed', err);
          wx.showToast({ title: 'Seed failed', icon: 'none' });
        });
      }
    });
  }
});
