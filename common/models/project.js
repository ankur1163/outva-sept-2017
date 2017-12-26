'use strict';

module.exports = function(Project) {

  Project.status = function(cb) {
    console.log("entered project route");
     var response = "amazing "
      cb(null, response);
    };
    Project.remoteMethod(
      'status', {
        http: {
          path: '/findallusers',
          verb: 'get'
        },
        returns: {
          arg: 'status',
          type: 'string'
        }
      }
    );

};
