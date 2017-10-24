'use strict';
var pusherone = require('pusher');
var paypal = require('paypal-rest-sdk')



module.exports = function(Meetups,pusher) {

  Meetups.status = function(cb) {
      var currentDate = new Date();
      var currentHour = currentDate.getHours();
      var OPEN_HOUR = 6;
      var CLOSE_HOUR = 20;
      console.log('Current hour is %d', currentHour);
      console.log("paypl is",paypal)
      console.log("ends")
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
    Meetups.status = function(cb) {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var OPEN_HOUR = 6;
        var CLOSE_HOUR = 20;
        console.log('Current hour is %d', currentHour);
        console.log("paypal is ",paypal)
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

        cluster: 'ap2', // optional, if `host` is present, it will override the `cluster` option.
      });

        if (2>1) {


          var textf = text.text;
          var timef = text.date;
          console.log("entered in pusher route")
          console.log("text",textf,"username",username,"time",timef,"text.date",text.date)
          pushertwo.trigger('private-messages', 'new_message', {
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

  Meetups.auth = function(req, cb) {

    console.log("entered auth route")
    console.log("req",req.body)
    var socketid = req.body.socket_id;
    var channel = req.body.channel_name;

    console.log("socketid is ",socketid,"channel ",channel)

     var pushertwo = new pusherone({
       appId: "411599",
       key: "2cf1cc85bdc7ecb3de23",
       secret: "0d71c657eea516b33c85",

       cluster: 'ap2', // optional, if `host` is present, it will override the `cluster` option.
      });

     const auth = pushertwo.authenticate(socketid, channel);
    console.log("auth is ",auth.auth);
    var tosend = auth.auth;



  cb(null,tosend);
};

Meetups.remoteMethod('auth', {
      accepts: [{ arg: 'req', type: 'object', http: function(ctx) {
        return ctx.req;
      } }],
      returns: {arg: 'auth', type: 'string'}
});


//sending message starts

Meetups.messagesend = function(message,username, cb) {
  console.log("message is ",message);
  console.log("username is ",username);
 console.log("")
 var pushertwo = new pusherone({
appId: "411599",
key: "2cf1cc85bdc7ecb3de23",
secret: "0d71c657eea516b33c85",

cluster: 'ap2', // optional, if `host` is present, it will override the `cluster` option.
});
  pushertwo.trigger( 'private-messages', 'messages', {
          message: message,
          username: username
      });



cb(null, "succesfull");
}

Meetups.remoteMethod('messagesend', {
    accepts: [{arg: 'message', type: 'string'},{arg: 'username', type: 'string'}],
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
