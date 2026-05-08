const cloud = require('../../utils/cloud');
const defaultData = require('../../utils/defaultData');

Page({
  data: {
    challenges: defaultData.challenges,
    completedCount: 0,
    totalPoints: 0
  },

  onLoad() {
    this.loadCompletedChallenges();
    this.loadCloudChallenges();
  },

  onShow() {
    this.loadCompletedChallenges();
  },

  loadCloudChallenges() {
    if (!cloud.isCloudReady()) return;

    cloud.callFunction('getChallenges').then(result => {
      if (result.challenges && result.challenges.length) {
        this.applyChallengeState(result.challenges);
      }
    }).catch(err => {
      console.error('Failed to load cloud challenges', err);
    });
  },

  loadCompletedChallenges() {
    const completedList = wx.getStorageSync('completedChallenges') || [];
    const challenges = this.data.challenges.map(challenge => ({
      ...challenge,
      completed: completedList.includes(challenge.id)
    }));
    this.applyChallengeState(challenges);
  },

  applyChallengeState(challenges) {
    const normalized = challenges.map(challenge => ({
      ...challenge,
      id: challenge.id || challenge._id,
      video: challenge.video || challenge.videoUrl
    }));
    
    const completedChallenges = normalized.filter(c => c.completed);
    const completedCount = completedChallenges.length;
    const totalPoints = completedChallenges.reduce((sum, challenge) => sum + challenge.reward, 0);
    
    this.setData({
      challenges: normalized,
      completedCount,
      totalPoints
    });
  },

  takeChallenge(e) {
    const challenge = e.currentTarget.dataset.challenge;

    wx.navigateTo({
      url: `/pages/challenge-detail/challenge-detail?data=${encodeURIComponent(JSON.stringify(challenge))}`
    });
  }
});
