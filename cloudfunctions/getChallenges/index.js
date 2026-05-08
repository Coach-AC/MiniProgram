const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

exports.main = async () => {
  const { OPENID } = cloud.getWXContext();
  const challengesResult = await db.collection('challenges')
    .where({ isActive: true })
    .orderBy('sortOrder', 'asc')
    .get();
  const completionsResult = await db.collection('challengeCompletions')
    .where({ openid: OPENID })
    .limit(100)
    .get();
  const completedIds = completionsResult.data.map(item => item.challengeId);
  const challenges = challengesResult.data.map(challenge => ({
    ...challenge,
    id: challenge._id,
    video: challenge.videoUrl,
    completed: completedIds.includes(challenge._id)
  }));

  return {
    challenges
  };
};
