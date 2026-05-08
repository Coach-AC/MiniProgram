const CLOUD_ENV_ID = 'cloud1-d4gsccwri0a741547';

function isCloudReady() {
  return Boolean(wx.cloud && CLOUD_ENV_ID && CLOUD_ENV_ID !== 'YOUR_CLOUD_ENV_ID');
}

function initCloud() {
  if (!wx.cloud) {
    console.warn('Cloud Base is not available in this base library.');
    return false;
  }

  if (!isCloudReady()) {
    return false;
  }

  wx.cloud.init({
    env: CLOUD_ENV_ID,
    traceUser: true
  });

  return isCloudReady();
}

function callFunction(name, data = {}) {
  if (!isCloudReady()) {
    return Promise.reject(new Error('Cloud environment is not configured.'));
  }

  return wx.cloud.callFunction({
    name,
    data
  }).then(res => res.result);
}

module.exports = {
  CLOUD_ENV_ID,
  initCloud,
  isCloudReady,
  callFunction
};
