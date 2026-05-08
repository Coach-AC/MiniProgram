const cloud = require('../../../utils/cloud');

Page({
  data: {
    video: {
      _id: '',
      title: '',
      description: '',
      url: '',
      thumbnailUrl: '/images/logo.png',
      difficulty: 'Advanced',
      duration: 'Training',
      challengeId: '',
      sortOrder: 99,
      isActive: true
    }
  },

  onLoad(options) {
    if (options.id) {
      this.loadVideo(options.id);
    }
  },

  loadVideo(id) {
    cloud.callFunction('admin', {
      action: 'video.list'
    }).then(result => {
      const video = (result.videos || []).find(item => item._id === id);
      if (video) this.setData({ video });
    });
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [`video.${field}`]: e.detail.value
    });
  },

  onActiveChange(e) {
    this.setData({
      'video.isActive': e.detail.value
    });
  },

  saveVideo() {
    cloud.callFunction('admin', {
      action: 'video.save',
      payload: {
        video: this.data.video
      }
    }).then(() => {
      wx.showToast({ title: 'Saved', icon: 'success' });
      setTimeout(() => wx.navigateBack(), 600);
    }).catch(err => {
      console.error('Save failed', err);
      wx.showToast({ title: 'Save failed', icon: 'none' });
    });
  }
});
