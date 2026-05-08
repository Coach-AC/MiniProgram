const cloud = require('../../../utils/cloud');

Page({
  data: {
    videos: []
  },

  onShow() {
    this.loadVideos();
  },

  loadVideos() {
    cloud.callFunction('admin', {
      action: 'video.list'
    }).then(result => {
      this.setData({ videos: result.videos || [] });
    }).catch(err => {
      console.error('Failed to load videos', err);
      wx.showToast({ title: 'Load failed', icon: 'none' });
    });
  },

  addVideo() {
    wx.navigateTo({ url: '/pages/admin/video-edit/video-edit' });
  },

  editVideo(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/admin/video-edit/video-edit?id=${id}` });
  },

  deleteVideo(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: 'Hide Video',
      content: 'This will hide the video from users.',
      success: (res) => {
        if (!res.confirm) return;
        cloud.callFunction('admin', {
          action: 'video.delete',
          payload: { _id: id }
        }).then(() => {
          wx.showToast({ title: 'Hidden', icon: 'success' });
          this.loadVideos();
        });
      }
    });
  }
});
