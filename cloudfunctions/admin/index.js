const cloud = require('wx-server-sdk');
const assertAdmin = require('./lib/assertAdmin');
const auditLog = require('./lib/auditLog');

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV });

const db = cloud.database();

const DEFAULT_VIDEOS = [
  {
    _id: 'free_throws_20_video',
    title: '20 Free Throws In A Row',
    description: 'Build a repeatable routine and the focus needed to make 20 straight free throws.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/FreeThrow_Shooting_Drills.mp4',
    thumbnailUrl: '/images/logo.png',
    difficulty: 'Advanced',
    duration: 'Training',
    challengeId: 'free_throws_20',
    sortOrder: 1,
    isActive: true
  },
  {
    _id: 'one_minute_3point_video',
    title: '1-min Three-Point Shooting',
    description: 'Practice quick three-point shooting under a one-minute scoring challenge.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/One_Minute_3Point_Shooting_Drill.mp4',
    thumbnailUrl: '/images/logo.png',
    difficulty: 'Advanced',
    duration: 'Training',
    challengeId: 'one_minute_3point',
    sortOrder: 2,
    isActive: true
  },
  {
    _id: 'elbow_jump_shots_video',
    title: 'Elbow Jump Shots',
    description: 'Work on elbow jumpers with balance, conditioning, and consistent footwork.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Byron_Scott_Shooting_Drill_Elbow_Shooting.mp4',
    thumbnailUrl: '/images/logo.png',
    difficulty: 'Advanced',
    duration: 'Training',
    challengeId: 'elbow_jump_shots',
    sortOrder: 3,
    isActive: true
  },
  {
    _id: 'between_legs_dribbling_video',
    title: 'Between the Legs Dribbling',
    description: 'Progress through between-the-legs ball handling drills with control and rhythm.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Ball_Handling_Drills_with_Coach_Mason.mp4',
    thumbnailUrl: '/images/logo.png',
    difficulty: 'Advanced',
    duration: 'Training',
    challengeId: 'between_legs_dribbling',
    sortOrder: 4,
    isActive: true
  }
];

const DEFAULT_CHALLENGES = [
  {
    _id: 'free_throws_20',
    title: '20 Free Throws In A Row',
    description: 'Sink 20 consecutive free throws with game-ready focus and routine.',
    icon: '🎯',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/FreeThrow_Shooting_Drills.mp4',
    difficulty: 'Advanced',
    reward: 50,
    sortOrder: 1,
    isActive: true
  },
  {
    _id: 'one_minute_3point',
    title: '1-min Three-Point Shooting',
    description: 'Make as many three-pointers as possible in one minute.',
    icon: '🏀',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/One_Minute_3Point_Shooting_Drill.mp4',
    difficulty: 'Advanced',
    reward: 50,
    sortOrder: 2,
    isActive: true
  },
  {
    _id: 'elbow_jump_shots',
    title: 'Elbow Jump Shots',
    description: 'Hit elbow jumpers from both sides with quick footwork and balance.',
    icon: '💪',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Byron_Scott_Shooting_Drill_Elbow_Shooting.mp4',
    difficulty: 'Advanced',
    reward: 50,
    sortOrder: 3,
    isActive: true
  },
  {
    _id: 'between_legs_dribbling',
    title: 'Between the Legs Dribbling',
    description: 'Control repeated between-the-legs dribbles without losing rhythm.',
    icon: '🔄',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Ball_Handling_Drills_with_Coach_Mason.mp4',
    difficulty: 'Advanced',
    reward: 50,
    sortOrder: 4,
    isActive: true
  }
];

async function upsertDoc(collection, doc) {
  const now = db.serverDate();
  const data = {
    ...doc,
    updatedAt: now
  };

  try {
    await db.collection(collection).doc(doc._id).get();
    await db.collection(collection).doc(doc._id).update({ data });
    return 'updated';
  } catch (err) {
    await db.collection(collection).doc(doc._id).set({
      data: {
        ...data,
        createdAt: now
      }
    });
    return 'created';
  }
}

async function listVideos(payload) {
  const limit = Math.min(payload.limit || 100, 100);
  const skip = payload.skip || 0;
  const result = await db.collection('videos')
    .orderBy('sortOrder', 'asc')
    .skip(skip)
    .limit(limit)
    .get();
  return { videos: result.data };
}

async function saveVideo(payload, adminOpenid) {
  const video = payload.video || {};
  const now = db.serverDate();
  const data = {
    title: video.title,
    description: video.description || '',
    url: video.url,
    thumbnailUrl: video.thumbnailUrl || '/images/logo.png',
    difficulty: video.difficulty || 'Advanced',
    duration: video.duration || 'Training',
    challengeId: video.challengeId || '',
    sortOrder: Number(video.sortOrder || 99),
    isActive: video.isActive !== false,
    updatedAt: now
  };

  if (!data.title || !data.url) {
    throw new Error('Video title and URL are required.');
  }

  if (video._id) {
    await db.collection('videos').doc(video._id).update({ data });
    await auditLog(db, { adminOpenid, action: 'video.update', targetCollection: 'videos', targetId: video._id, after: data });
    return { _id: video._id };
  }

  const result = await db.collection('videos').add({
    data: {
      ...data,
      createdBy: adminOpenid,
      createdAt: now
    }
  });
  await auditLog(db, { adminOpenid, action: 'video.create', targetCollection: 'videos', targetId: result._id, after: data });
  return { _id: result._id };
}

async function deleteVideo(payload, adminOpenid) {
  const id = payload._id;
  if (!id) throw new Error('Video _id is required.');

  await db.collection('videos').doc(id).update({
    data: {
      isActive: false,
      updatedAt: db.serverDate()
    }
  });
  await auditLog(db, { adminOpenid, action: 'video.delete', targetCollection: 'videos', targetId: id });
  return { _id: id };
}

async function listUsers(payload) {
  const limit = Math.min(payload.limit || 50, 100);
  const skip = payload.skip || 0;
  const result = await db.collection('users')
    .orderBy('lastLoginAt', 'desc')
    .skip(skip)
    .limit(limit)
    .get();
  return { users: result.data };
}

async function updateUserStatus(payload, adminOpenid) {
  const { openid, status } = payload;
  if (!openid || !['active', 'blocked'].includes(status)) {
    throw new Error('Valid openid and status are required.');
  }

  await db.collection('users').doc(openid).update({
    data: {
      status,
      updatedAt: db.serverDate()
    }
  });
  await auditLog(db, { adminOpenid, action: 'user.status', targetCollection: 'users', targetId: openid, after: { status } });
  return { openid, status };
}

async function analyticsSummary() {
  const userCount = await db.collection('users').count();
  const activeVideos = await db.collection('videos').where({ isActive: true }).count();
  const completions = await db.collection('challengeCompletions').count();
  const topUsers = await db.collection('users').orderBy('points', 'desc').limit(100).get();
  const totalPoints = topUsers.data.reduce((sum, user) => sum + (user.points || 0), 0);

  return {
    totalUsers: userCount.total,
    activeVideos: activeVideos.total,
    challengeCompletions: completions.total,
    totalPoints
  };
}

async function seedDefaults(adminOpenid) {
  const videoResults = [];
  const challengeResults = [];

  for (const video of DEFAULT_VIDEOS) {
    videoResults.push({ _id: video._id, result: await upsertDoc('videos', video) });
  }

  for (const challenge of DEFAULT_CHALLENGES) {
    challengeResults.push({ _id: challenge._id, result: await upsertDoc('challenges', challenge) });
  }

  await auditLog(db, {
    adminOpenid,
    action: 'seed.defaults',
    targetCollection: 'videos,challenges',
    after: { videoResults, challengeResults }
  });

  return { videoResults, challengeResults };
}

exports.main = async (event) => {
  const { OPENID } = cloud.getWXContext();
  await assertAdmin(db, OPENID);

  const action = event.action;
  const payload = event.payload || {};

  switch (action) {
    case 'video.list':
      return listVideos(payload);
    case 'video.save':
      return saveVideo(payload, OPENID);
    case 'video.delete':
      return deleteVideo(payload, OPENID);
    case 'user.list':
      return listUsers(payload);
    case 'user.status':
      return updateUserStatus(payload, OPENID);
    case 'analytics.summary':
      return analyticsSummary();
    case 'seed.defaults':
      return seedDefaults(OPENID);
    default:
      throw new Error(`Unknown admin action: ${action}`);
  }
};
