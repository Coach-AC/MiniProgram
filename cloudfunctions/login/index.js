const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();
const users = db.collection('users');

exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext();
  const now = db.serverDate();
  const profile = event.profile || {};
  const safeProfile = {
    nickName: profile.nickName || 'Basketball Player',
    avatarUrl: profile.avatarUrl || '/images/logo.png'
  };

  let existing = null;
  try {
    const result = await users.doc(OPENID).get();
    existing = result.data;
  } catch (err) {
    existing = null;
  }

  if (!existing) {
    const user = {
      _id: OPENID,
      openid: OPENID,
      role: 'user',
      status: 'active',
      nickName: safeProfile.nickName,
      avatarUrl: safeProfile.avatarUrl,
      points: 0,
      completedChallengeIds: [],
      trainingStreak: 0,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now
    };

    await users.doc(OPENID).set({ data: user });
    return { openid: OPENID, role: user.role, user };
  }

  const updateData = {
    lastLoginAt: now,
    updatedAt: now
  };

  if (profile.nickName) updateData.nickName = profile.nickName;
  if (profile.avatarUrl) updateData.avatarUrl = profile.avatarUrl;

  await users.doc(OPENID).update({ data: updateData });
  const refreshed = await users.doc(OPENID).get();

  return {
    openid: OPENID,
    role: refreshed.data.role,
    user: refreshed.data
  };
};
