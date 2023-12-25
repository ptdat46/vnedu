const connector = require('./connect.js')

module.exports = async (query, params = null) => {
  return await new Promise(async (resolve, reject) => {
    try {
      query = query.replace("''", "'");
      if (params) {
        connector.query(query, params, (err, result) => {
          if (err) {
            console.log(err);
          }
          resolve(result);
        });
      } else {
        connector.query(query, (err, result) => {
          if (err) {
            console.log(err);
          }
          resolve(result);
        });
      }
    } catch (err) {
      reject(err);
    }
  }).then((data) => data);
};