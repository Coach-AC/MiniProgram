const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext();
  const profile = event.profile || {};
  const data = {
    updatedAt: db.serverDate()
  };

  if (profile.nickName) data.nickName = profile.nickName;
  if (profile.avatarUrl) data.avatarUrl = profile.avatarUrl;
  if (profile.phone) data.phone = profile.phone;

  await db.collection('users').doc(OPENID).update({ data });
  const refreshed = await db.collection('users').doc(OPENID).get();

  return {
    user: refreshed.data
  };
};
