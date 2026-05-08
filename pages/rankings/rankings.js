// rankings.js
Page({
  data: {
    rankings: [
      { rank: 1, name: 'Alex Chen', score: 250, avatar: '👨‍🏫', level: 'Elite' },
      { rank: 2, name: 'Jordan Smith', score: 225, avatar: '🏀', level: 'Pro' },
      { rank: 3, name: 'Sarah Johnson', score: 200, avatar: '👩‍🏫', level: 'Pro' },
      { rank: 4, name: 'Mike Davis', score: 175, avatar: '⛹️', level: 'Advanced' },
      { rank: 5, name: 'Emily Brown', score: 150, avatar: '🎯', level: 'Advanced' },
      { rank: 6, name: 'Chris Wilson', score: 125, avatar: '🏃', level: 'Intermediate' },
      { rank: 7, name: 'Lisa Anderson', score: 100, avatar: '💪', level: 'Intermediate' },
      { rank: 8, name: 'Tom Martinez', score: 75, avatar: '🤸', level: 'Beginner' }
    ],
    userRank: null,
    userScore: 0,
    filterLevel: 'All'
  },

  onLoad() {
    this.loadUserStats();
  },

  loadUserStats() {
    // Calculate user score from completed challenges
    const completedList = wx.getStorageSync('completedChallenges') || [];
    const userScore = completedList.length * 50;
    
    this.setData({
      userScore,
      userRank: 9 + Math.floor(Math.random() * 5) // Mock rank
    });
  },

  filterByLevel(e) {
    const level = e.currentTarget.dataset.level;
    this.setData({
      filterLevel: level
    });
  }
});
