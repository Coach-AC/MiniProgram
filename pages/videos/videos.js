const cloud = require('../../utils/cloud');
const defaultData = require('../../utils/defaultData');

Page({
  data: {
    videos: defaultData.videos
  },

  onLoad() {
    this.loadVideos();
  },

  loadVideos() {
    if (!cloud.isCloudReady()) return;

    cloud.callFunction('getVideos').then(result => {
      const videos = (result.videos || []).map(video => ({
        ...video,
        id: video._id,
        thumbnail: video.thumbnailUrl || '/images/logo.png'
      }));

      if (videos.length) {
        this.setData({ videos });
      }
    }).catch(err => {
      console.error('Failed to load cloud videos', err);
    });
  },

  playVideo(e) {
    const video = e.currentTarget.dataset.video;
    const url = encodeURIComponent(video.url);
    const title = encodeURIComponent(video.title);
    const description = encodeURIComponent(video.description);
    
    wx.navigateTo({
      url: `/pages/video-player/video-player?url=${url}&title=${title}&description=${description}`
    });
  }
})
