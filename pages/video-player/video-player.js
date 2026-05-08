Page({
  data: {
    videoUrl: '',
    videoTitle: 'Training Video',
    videoDescription: 'Watch this basketball training video to improve your skills.'
  },

  onLoad(options) {
    if (options.url) {
      const videoUrl = decodeURIComponent(options.url);
      this.setData({
        videoUrl
      });
    }

    // Optionally extract title and description from query params
    if (options.title) {
      this.setData({
        videoTitle: decodeURIComponent(options.title)
      });
    }

    if (options.description) {
      this.setData({
        videoDescription: decodeURIComponent(options.description)
      });
    }
  },

  shareVideo() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });

    wx.showToast({
      title: 'Use the share menu to share',
      icon: 'none'
    });
  },

  downloadVideo() {
    wx.showToast({
      title: 'Download feature coming soon',
      icon: 'none',
      duration: 2000
    });
  },

  goBack() {
    wx.navigateBack({
      delta: 1
    });
  },

  onShareAppMessage() {
    return {
      title: this.data.videoTitle || 'Check out this basketball training video!',
      path: `/pages/video-player/video-player?url=${encodeURIComponent(this.data.videoUrl)}&title=${encodeURIComponent(this.data.videoTitle)}&description=${encodeURIComponent(this.data.videoDescription)}`,
      imageUrl: '/images/logo.png'
    };
  }
});
