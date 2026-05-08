const cloud = require('wx-server-sdk');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

exports.main = async () => {
  const result = await db.collection('videos')
    .where({ isActive: true })
    .orderBy('sortOrder', 'asc')
    .get();

  return {
    videos: result.data
  };
};
