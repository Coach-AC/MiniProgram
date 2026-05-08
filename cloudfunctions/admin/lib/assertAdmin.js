async function assertAdmin(db, openid) {
  const userResult = await db.collection('users').doc(openid).get();
  const user = userResult.data;

  if (!user || user.role !== 'admin' || user.status === 'blocked') {
    throw new Error('Admin permission required.');
  }

  return user;
}

module.exports = assertAdmin;
