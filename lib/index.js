'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const fs = require('fs');
const path = require('path');
const qiniu = require('qiniu');

if (!strapi.config.qiniu) {
  throw new Error(
    ` Qiniu config parameters has not define , please input the parameters in custom.json file in the project root path.`
  );
}

const { accessKey, secretKey, bucket, qiniuPrefixPath, selfServerUrl } = strapi.config.qiniu;
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const config = new qiniu.conf.Config();
const options = {
  scope: bucket
};
/* eslint-disable no-unused-vars */
module.exports = {
  provider: 'qiniu',
  name: 'qiniu server',
  init: (config) => {
    return {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          try {
            const putPolicy = new qiniu.rs.PutPolicy(options);
            const uploadToken = putPolicy.uploadToken(mac);

            const formUploader = new qiniu.form_up.FormUploader(config);
            const putExtra = new qiniu.form_up.PutExtra();
            formUploader.put(uploadToken, qiniuPrefixPath + file.hash + file.ext, file.buffer, putExtra, function(
              respErr,
              respBody,
              respInfo
            ) {
              if (respErr) {
                console.error(respErr);
                reject(respErr);
              } else {
                if (respInfo.statusCode === 200) {
                  file.url = selfServerUrl + respBody.key;
                  resolve(selfServerUrl + respBody.key);
                } else {
                  reject(respInfo.statusCode);
                }
              }
            });
          } catch (err) {
            console.error(err);
            reject(err);
          }
        });
      },
      delete: (file) => {
        return new Promise((resolve, reject) => {
          const bucketManager = new qiniu.rs.BucketManager(mac, config);
          const key = file.url.replace('http://files.northmro.com/', '');
          bucketManager.delete(bucket, key, function(err, respBody, respInfo) {
            if (err) {
              console.error(err);
              reject(undefined);
            } else {
              resolve(respInfo.statusCode === 200);
            }
          });
        });
      }
    };
  }
};
