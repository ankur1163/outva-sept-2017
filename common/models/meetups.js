'use strict';
var pusherone = require('pusher');
var paypal = require('paypal-rest-sdk')

var paymenturl ;

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

//pay route starts


Meetups.pay = function(cost, cb) {


  //var paypal = Meetups.app.models.Paypal;
  console.log("cost is ",cost)

  console.log("entered pay paypal route")
  paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'ATgXK7z8Xvjv17m8K-2ypy2XBbAjD9A_57FmLWbByh8WEFqqdmTF0lr9bbL4nwKFDTFcO_NN7yQGt_tl',
  'client_secret': 'EKSkiAyzMUDqe0iZfR3e3uqRToclRzJiZ8HwoycI0hBd_qKuRpxMJQRF_MBKocFph7smnndCspRRCi4v'
});

  var create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3001/success",
        "cancel_url": "http://localhost:3001/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Global va Hours",
                "sku": "1234",
                "price": cost,
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": cost
        },
        "description": "Pay for globalva Hours"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {
        console.log("Create Payment Response");
        for(var i =0;i<payment.links.length;i++){
          if(payment.links[i].rel==="approval_url"){
              console.log("cb is ",cb)
              paymenturl = payment.links[i].href;
              cb(null,paymenturl);
          }
        }
    }
});


};

Meetups.remoteMethod('pay', {
      accepts: [{ arg: 'cost', type: 'Number',required:true}],
      returns: {arg: 'pay', type: 'string'}
});
//trying my hands in remote hooks

/*
Meetups.afterRemote('pay', function(context, customer, next) {
  console.log("this is great after remote")
  console.log("paymenturl",paymenturl)
  var res = context.res; //this is the same response object you get in Express
  res.redirect(paymenturl)
  console.log("this is done")

})

*/

//pay route ends


//successcredithours route starts
Meetups.successcredithours = function(payerid,paymentid, cb) {
  console.log("entered successcredithours ")
  console.log("paymentid ",paymentid);
  console.log("payerid ",payerid);
  var paymentId =paymentid;
  var payerId = payerid;


  const execute_payment_json={
    "payer_id":payerId,
      "transactions":[{
        "amount":{
          "currency":"USD",
          "total":"14.00"
        }
      }]

  };

  paypal.payment.execute(paymentId,execute_payment_json,function(error,payment){
    if(error){
      console.log(error.response);
      var tosend = error.response
      cb(null,tosend);
      throw error;
    }else{
      console.log("get payment response");
      var tosend = payment
      cb(null,tosend)
    }
  })



};


Meetups.remoteMethod('successcredithours', {
    accepts: [{ arg: 'payerid', type: 'string',required:true },{ arg: 'paymentid', type: 'string',required:true }],
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
