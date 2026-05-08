const videos = [
  {
    _id: 'free_throws_20_video',
    id: 'free_throws_20_video',
    title: '20 Free Throws In A Row',
    description: 'Build a repeatable routine and the focus needed to make 20 straight free throws.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/FreeThrow_Shooting_Drills.mp4',
    thumbnail: '/images/logo.png',
    thumbnailUrl: '/images/logo.png',
    duration: 'Training',
    difficulty: 'Advanced'
  },
  {
    _id: 'one_minute_3point_video',
    id: 'one_minute_3point_video',
    title: '1-min Three-Point Shooting',
    description: 'Practice quick three-point shooting under a one-minute scoring challenge.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/One_Minute_3Point_Shooting_Drill.mp4',
    thumbnail: '/images/logo.png',
    thumbnailUrl: '/images/logo.png',
    duration: 'Training',
    difficulty: 'Advanced'
  },
  {
    _id: 'elbow_jump_shots_video',
    id: 'elbow_jump_shots_video',
    title: 'Elbow Jump Shots',
    description: 'Work on elbow jumpers with balance, conditioning, and consistent footwork.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Byron_Scott_Shooting_Drill_Elbow_Shooting.mp4',
    thumbnail: '/images/logo.png',
    thumbnailUrl: '/images/logo.png',
    duration: 'Training',
    difficulty: 'Advanced'
  },
  {
    _id: 'between_legs_dribbling_video',
    id: 'between_legs_dribbling_video',
    title: 'Between the Legs Dribbling',
    description: 'Progress through between-the-legs ball handling drills with control and rhythm.',
    url: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Ball_Handling_Drills_with_Coach_Mason.mp4',
    thumbnail: '/images/logo.png',
    thumbnailUrl: '/images/logo.png',
    duration: 'Training',
    difficulty: 'Advanced'
  }
];

const challenges = [
  {
    _id: 'free_throws_20',
    id: 'free_throws_20',
    title: '20 Free Throws In A Row',
    description: 'Sink 20 consecutive free throws with game-ready focus and routine.',
    icon: '🎯',
    video: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/FreeThrow_Shooting_Drills.mp4',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/FreeThrow_Shooting_Drills.mp4',
    difficulty: 'Advanced',
    reward: 50,
    completed: false
  },
  {
    _id: 'one_minute_3point',
    id: 'one_minute_3point',
    title: '1-min Three-Point Shooting',
    description: 'Make as many three-pointers as possible in one minute.',
    icon: '🏀',
    video: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/One_Minute_3Point_Shooting_Drill.mp4',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/One_Minute_3Point_Shooting_Drill.mp4',
    difficulty: 'Advanced',
    reward: 50,
    completed: false
  },
  {
    _id: 'elbow_jump_shots',
    id: 'elbow_jump_shots',
    title: 'Elbow Jump Shots',
    description: 'Hit elbow jumpers from both sides with quick footwork and balance.',
    icon: '💪',
    video: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Byron_Scott_Shooting_Drill_Elbow_Shooting.mp4',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Byron_Scott_Shooting_Drill_Elbow_Shooting.mp4',
    difficulty: 'Advanced',
    reward: 50,
    completed: false
  },
  {
    _id: 'between_legs_dribbling',
    id: 'between_legs_dribbling',
    title: 'Between the Legs Dribbling',
    description: 'Control repeated between-the-legs dribbles without losing rhythm.',
    icon: '🔄',
    video: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Ball_Handling_Drills_with_Coach_Mason.mp4',
    videoUrl: 'https://ac-sports-videos-1429345886.cos.ap-beijing.myqcloud.com/Ball_Handling_Drills_with_Coach_Mason.mp4',
    difficulty: 'Advanced',
    reward: 50,
    completed: false
  }
];

module.exports = {
  videos,
  challenges
};
