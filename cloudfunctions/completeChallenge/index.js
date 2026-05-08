const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();
const _ = db.command;

exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext();
  const challengeId = event.challengeId;

  if (!challengeId) {
    throw new Error('challengeId is required.');
  }

  const challenge = await db.collection('challenges').doc(challengeId).get();
  if (!challenge.data || !challenge.data.isActive) {
    throw new Error('Challenge is not available.');
  }

  const existing = await db.collection('challengeCompletions')
    .where({ openid: OPENID, challengeId })
    .limit(1)
    .get();

  if (existing.data.length) {
    const user = await db.collection('users').doc(OPENID).get();
    return {
      alreadyCompleted: true,
      user: user.data
    };
  }

  const reward = challenge.data.reward || 0;
  const currentUser = await db.collection('users').doc(OPENID).get();
  const completedChallengeIds = currentUser.data.completedChallengeIds || [];
  const nextCompletedChallengeIds = completedChallengeIds.includes(challengeId)
    ? completedChallengeIds
    : completedChallengeIds.concat(challengeId);

  await db.collection('challengeCompletions').add({
    data: {
      openid: OPENID,
      challengeId,
      pointsAwarded: reward,
      completedAt: db.serverDate()
    }
  });

  await db.collection('users').doc(OPENID).update({
    data: {
      points: _.inc(reward),
      completedChallengeIds: nextCompletedChallengeIds,
      updatedAt: db.serverDate()
    }
  });

  const user = await db.collection('users').doc(OPENID).get();

  return {
    alreadyCompleted: false,
    pointsAwarded: reward,
    user: user.data
  };
};
