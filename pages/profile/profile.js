const cloud = require('../../utils/cloud');
const auth = require('../../utils/auth');

Page({
  data: {
    userInfo: {
      nickName: 'Basketball Player',
      avatarUrl: '/images/logo.png'
    },
    stats: {
      challengesCompleted: 0,
      totalPoints: 0,
      currentRank: 0,
      trainingStreak: 0
    },
    achievements: [],
    canIUseGetUserProfile: false,
    cloudReady: false,
    openid: '',
    role: 'user',
    isAdmin: false,
    profileStatusText: 'Basketball Enthusiast',
    pageError: ''
  },

  onLoad() {
    this.setData({
      cloudReady: cloud.isCloudReady()
    });
    this.loadUserProfile();
    this.loadUserStats();
    this.loadAchievements();
    
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }
  },

  onShow() {
    this.loadUserProfile();
    this.loadUserStats();
    this.loadAchievements();
  },

  loadUserProfile() {
    const app = getApp();
    const userInfo = auth.getCurrentUser() || wx.getStorageSync('userInfo');

    if (userInfo) {
      const role = userInfo.role || 'user';
      this.setData({
        userInfo,
        openid: userInfo.openid || app.globalData.openid || '',
        role,
        isAdmin: auth.isAdmin(userInfo),
        profileStatusText: role === 'admin' ? 'Admin Coach' : 'Basketball Enthusiast',
        pageError: ''
      });
    }

    if (!cloud.isCloudReady()) return;

    app.refreshProfile().then(result => {
      if (!result || !result.user) return;
      this.setProfileFromCloud(result.user, result.completions || []);
    }).catch(err => {
      console.error('Failed to refresh profile', err);
      this.setData({
        pageError: 'Cloud profile is not ready yet. Try Login / Update Profile.'
      });
    });
  },

  setProfileFromCloud(user, completions) {
    const completedCount = completions.length;
    const role = user.role || 'user';
    this.setData({
      userInfo: user,
      openid: user.openid,
      role,
      isAdmin: auth.isAdmin(user),
      profileStatusText: role === 'admin' ? 'Admin Coach' : 'Basketball Enthusiast',
      pageError: '',
      'stats.challengesCompleted': completedCount,
      'stats.totalPoints': user.points || 0,
      'stats.currentRank': user.rank || 0,
      'stats.trainingStreak': user.trainingStreak || 0
    });
  },

  loadUserStats() {
    if (cloud.isCloudReady()) return;

    const completedChallenges = wx.getStorageSync('completedChallenges') || [];
    const challengesCompleted = completedChallenges.length;
    const totalPoints = challengesCompleted * 50;
    
    this.setData({
      'stats.challengesCompleted': challengesCompleted,
      'stats.totalPoints': totalPoints,
      'stats.currentRank': Math.floor(Math.random() * 20) + 1,
      'stats.trainingStreak': Math.floor(Math.random() * 10)
    });
  },

  loadAchievements() {
    const completedChallenges = wx.getStorageSync('completedChallenges') || [];
    
    const achievements = [];
    
    if (completedChallenges.length >= 1) {
      achievements.push({
        id: 1,
        title: 'First Step',
        description: 'Complete your first challenge',
        icon: '🎯',
        unlocked: true,
        className: 'unlocked'
      });
    }
    
    if (completedChallenges.length >= 3) {
      achievements.push({
        id: 2,
        title: 'Rising Star',
        description: 'Complete 3 challenges',
        icon: '⭐',
        unlocked: true,
        className: 'unlocked'
      });
    }
    
    if (completedChallenges.length >= 5) {
      achievements.push({
        id: 3,
        title: 'Champion',
        description: 'Complete 5 challenges',
        icon: '🏆',
        unlocked: true,
        className: 'unlocked'
      });
    }
    
    achievements.push({
      id: 4,
      title: 'Master',
      description: 'Complete 10 challenges',
      icon: '👑',
      unlocked: completedChallenges.length >= 10,
      className: completedChallenges.length >= 10 ? 'unlocked' : 'locked'
    });
    
    this.setData({
      achievements
    });
  },

  getUserProfile() {
    wx.getUserProfile({
      desc: 'Get your profile information',
      success: (res) => {
        const userInfo = res.userInfo;
        wx.setStorageSync('userInfo', userInfo);
        this.setData({
          userInfo
        });

        const app = getApp();
        app.login(userInfo).then(result => {
          if (result && result.user) {
            this.setProfileFromCloud(result.user, []);
          }
        }).catch(err => {
          console.error('Login update failed', err);
          this.setData({
            pageError: 'Login failed. Check cloud function logs.'
          });
        });
        
        wx.showToast({
          title: 'Profile updated!',
          icon: 'success'
        });
      }
    });
  },

  editProfile() {
    wx.showToast({
      title: 'Edit profile feature coming soon',
      icon: 'none'
    });
  },

  goToAdmin() {
    wx.navigateTo({
      url: '/pages/admin/dashboard/dashboard'
    });
  },

  shareProfile() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });

    wx.showToast({
      title: 'Use the share menu to share',
      icon: 'none'
    });
  },

  onShareAppMessage() {
    return {
      title: `Check out my basketball training progress! I've completed ${this.data.stats.challengesCompleted} challenges.`,
      path: '/pages/profile/profile',
      imageUrl: '/images/logo.png'
    };
  }
});
