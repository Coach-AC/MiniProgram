# WeChat Cloud Base Setup

This project now supports WeChat Cloud Base login, user profiles, admin access, cloud videos, cloud challenges, and basic analytics.

## 1. Enable Cloud Development

1. Open the project in WeChat Developer Tools.
2. Click Cloud Development.
3. Create a Cloud Base environment.
4. Copy the environment ID.
5. Open `utils/cloud.js`.
6. Replace:

```js
const CLOUD_ENV_ID = 'YOUR_CLOUD_ENV_ID';
```

with your real environment ID.

## 2. Create Database Collections

Create these collections in Cloud Database:

- `users`
- `videos`
- `challenges`
- `challengeCompletions`
- `analyticsEvents`
- `adminAuditLogs`

## 3. Recommended Collection Fields

### users

- `_id`: openid
- `openid`: string
- `role`: `user` or `admin`
- `status`: `active` or `blocked`
- `nickName`: string
- `avatarUrl`: string
- `phone`: string, optional
- `points`: number
- `completedChallengeIds`: array
- `trainingStreak`: number
- `createdAt`: date
- `updatedAt`: date
- `lastLoginAt`: date

### videos

- `title`: string
- `description`: string
- `url`: HTTPS video URL
- `thumbnailUrl`: string
- `difficulty`: string
- `duration`: string
- `challengeId`: string
- `sortOrder`: number
- `isActive`: boolean
- `createdBy`: openid
- `createdAt`: date
- `updatedAt`: date

### challenges

- `_id`: stable challenge ID
- `title`: string
- `description`: string
- `icon`: string
- `videoUrl`: HTTPS video URL
- `difficulty`: string
- `reward`: number
- `sortOrder`: number
- `isActive`: boolean

### challengeCompletions

- `openid`: string
- `challengeId`: string
- `pointsAwarded`: number
- `completedAt`: date

### adminAuditLogs

- `adminOpenid`: string
- `action`: string
- `targetCollection`: string
- `targetId`: string
- `before`: object, optional
- `after`: object, optional
- `createdAt`: date

## 4. Database Permission Rules

Use conservative database permissions: client-side reads and writes should be disabled for these collections. All access should go through cloud functions.

Recommended practical setting in the Cloud Database console:

- `users`: only creator readable/writable is still too loose for roles; prefer no client access/custom false.
- `videos`: no client write; no client read if using `getVideos`.
- `challenges`: no client write; no client read if using `getChallenges`.
- `challengeCompletions`: no client access.
- `analyticsEvents`: no client access.
- `adminAuditLogs`: no client access.

The cloud functions use the management-side SDK and perform role checks server-side.

## 5. Deploy Cloud Functions

Deploy these folders from WeChat Developer Tools:

- `cloudfunctions/login`
- `cloudfunctions/getProfile`
- `cloudfunctions/updateProfile`
- `cloudfunctions/getVideos`
- `cloudfunctions/getChallenges`
- `cloudfunctions/completeChallenge`
- `cloudfunctions/admin`

For each function, right-click the function folder and choose upload/deploy.

## 6. First Login and Admin Promotion

1. Compile the mini program.
2. Open Profile.
3. Tap Login / Update Profile.
4. The Profile page will show your `OpenID`.
5. In Cloud Database, open `users`.
6. Find your user document.
7. Change:

```json
{
  "role": "admin",
  "status": "active"
}
```

8. Reopen Profile. You should now see Admin Dashboard.

## 7. Seed Default Videos and Challenges

After you become admin:

1. Open Profile.
2. Tap Admin Dashboard.
3. Tap Seed Default Data.

This creates or updates the default `videos` and `challenges` records using your HTTPS COS URLs.

## 8. Admin Pages

- `pages/admin/dashboard/dashboard`: summary and admin navigation
- `pages/admin/videos/videos`: list/hide videos
- `pages/admin/video-edit/video-edit`: create/update video
- `pages/admin/users/users`: user list and block/unblock
- `pages/admin/analytics/analytics`: simple totals

## 9. Notes

The native tab bar stays user-focused. Admin access appears through Profile only when `users.role` is `admin`. This avoids exposing admin routes in the main tab bar and keeps role checks on the server.
