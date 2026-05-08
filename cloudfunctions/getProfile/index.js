const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

exports.main = async () => {
  const { OPENID } = cloud.getWXContext();
  const userResult = await db.collection('users').doc(OPENID).get();
  const completions = await db.collection('challengeCompletions')
    .where({ openid: OPENID })
    .orderBy('completedAt', 'desc')
    .limit(100)
    .get();

  return {
    openid: OPENID,
    user: userResult.data,
    completions: completions.data
  };
};
