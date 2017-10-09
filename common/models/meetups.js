'use strict';
var pusherone = require('pusher');



module.exports = function(Meetups,pusher) {

  Meetups.status = function(cb) {
      var currentDate = new Date();
      var currentHour = currentDate.getHours();
      var OPEN_HOUR = 6;
      var CLOSE_HOUR = 20;
      console.log('Current hour is %d', currentHour);
      var response;
      if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
        response = 'We are open yeah!!! for business.';
      } else {
        response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
      }
      cb(null, response);
    };
    Meetups.remoteMethod(
      'status', {
        http: {
          path: '/status',
          verb: 'get'
        },
        returns: {
          arg: 'status',
          type: 'string'
        }
      }
    );
    Meetups.pusher = function(username,text,time,cb) {
      var response;
            var pushertwo = new pusherone({
        appId: "411599",
        key: "2cf1cc85bdc7ecb3de23",
        secret: "0d71c657eea516b33c85",
        encrypted: false, // optional, defaults to false
        host: 'HOST', // optional, defaults to api.pusherapp.com
        port: 80, // optional, defaults to 80 for unencrypted and 443 for encrypted
        cluster: 'ap2', // optional, if `host` is present, it will override the `cluster` option.
      });

        if (2>1) {


          var textf = text.text;
          var timef = text.date;
          console.log("text",textf,"username",username,"time",timef,"text.date",text.date)
          pushertwo.trigger('messages', 'new_message', {
             'text': textf,
             'username': username,
             'time': timef
           })
          response = username + textf + timef +'sending something for you roses';
        } else {
          response = 'mont blanc';
        }
        cb(null, response);
      };

      Meetups.remoteMethod('pusher', {
          accepts: [{arg: 'username', type: 'string'},{arg: 'text', type: 'object'},{arg: 'date', type: 'Date'}],
          returns: {arg: 'greeting', type: 'string'}
    });
      /*
      Meetups.remoteMethod(
        'pusher', {
          http: {
            path: '/pusher',
            verb: 'post'
          },
          returns: {
            arg: 'pusher',
            type: 'string'
          }
        }
      ); */

};
