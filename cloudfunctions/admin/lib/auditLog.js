async function auditLog(db, data) {
  return db.collection('adminAuditLogs').add({
    data: {
      ...data,
      createdAt: db.serverDate()
    }
  });
}

module.exports = auditLog;
