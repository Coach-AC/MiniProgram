Page({
  data: {
    motto: 'Welcome to Basketball Drills Platform!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && 
                    wx.canIUse('open-data.type.userNickName')
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../videos/videos'
    })
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },

  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  getUserInfo(e) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  goToVideos() {
    wx.switchTab({
      url: '/pages/videos/videos'
    })
  },

  goToChallenges() {
    wx.switchTab({
      url: '/pages/challenges/challenges'
    })
  },

  goToRankings() {
    wx.switchTab({
      url: '/pages/rankings/rankings'
    })
  },

  goToFitnessPlan() {
    wx.switchTab({
      url: '/pages/fitness-plan/fitness-plan'
    })
  },

  goToProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    })
  }

})
