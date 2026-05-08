const cloud = require('../../utils/cloud');

Page({
  data: {
    challenge: null,
    completed: false,
    completionTime: null,
    shareData: {}
  },

  onLoad(options) {
    if (options.data) {
      let challenge = null;
      try {
        challenge = JSON.parse(decodeURIComponent(options.data));
      } catch (err) {
        wx.showToast({
          title: 'Challenge data error',
          icon: 'none'
        });
        return;
      }

      this.setData({
        challenge
      });

      // Check if already completed
      const completedList = wx.getStorageSync('completedChallenges') || [];
      const isCompleted = completedList.includes(challenge.id);

      if (isCompleted) {
        const completionTime = wx.getStorageSync(`challenge_${challenge.id}_time`);
        this.setData({
          completed: isCompleted,
          completionTime
        });
      } else {
        this.setData({
          completed: isCompleted
        });
      }
    }
  },

  markComplete() {
    const challengeId = this.data.challenge.id;

    if (cloud.isCloudReady()) {
      cloud.callFunction('completeChallenge', { challengeId })
        .then(() => {
          this.saveLocalCompletion(challengeId);
          this.finishCompletion();
        })
        .catch(err => {
          console.error('Cloud challenge completion failed', err);
          wx.showToast({
            title: 'Could not sync completion',
            icon: 'none'
          });
        });
      return;
    }

    this.saveLocalCompletion(challengeId);
    this.finishCompletion();
  },

  saveLocalCompletion(challengeId) {
    let completedList = wx.getStorageSync('completedChallenges') || [];

    if (!completedList.includes(challengeId)) {
      completedList.push(challengeId);
      wx.setStorageSync('completedChallenges', completedList);
      
      // Store completion time
      const completionTime = new Date().toLocaleString();
      wx.setStorageSync(`challenge_${challengeId}_time`, completionTime);
    }
  },

  finishCompletion() {
    const challengeId = this.data.challenge.id;
    this.setData({
      completed: true,
      completionTime: wx.getStorageSync(`challenge_${challengeId}_time`)
    });

    wx.showToast({
      title: 'Challenge Completed! 🎉',
      icon: 'success',
      duration: 2000
    });

    // Show share menu after completion
    setTimeout(() => {
      this.showShareOptions();
    }, 1000);
  },

  showShareOptions() {
    wx.showActionSheet({
      itemList: ['Share Achievement', 'Continue Training'],
      success: (res) => {
        if (res.tapIndex === 0) {
          this.shareAchievement();
        }
      }
    });
  },

  shareAchievement() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });

    wx.showToast({
      title: 'Use the share menu to share',
      icon: 'none'
    });
  },

  goBack() {
    wx.navigateBack({
      delta: 1
    });
  },

  onShareAppMessage() {
    const title = this.data.challenge && this.data.challenge.title
      ? `I just completed the "${this.data.challenge.title}" challenge! 🏀`
      : 'Check out this basketball challenge!';

    return {
      title,
      path: '/pages/challenges/challenges',
      imageUrl: '/images/logo.png'
    };
  }
});
