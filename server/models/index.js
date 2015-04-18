var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      console.log('getting from database');
      // db.query('SELECT * FROM Messages', function(err, rows, fields){
      //
      // });
    }, // a function which produces all the messages
    post: function (message) {
      console.log(message.message);
      console.log(message.roomname);
      console.log(message.username);
      var queryArgs = [message.message, message.roomname, message.username];
      var queryString = ("INSERT INTO Messages (text, user_id, room_id) SELECT '" + queryArgs[0] + "', u.id, (SELECT r.id FROM Room r  WHERE r.name = '" + queryArgs[1] + "') FROM User u WHERE u.name = '" + queryArgs[2] + "';");
      // var queryString = "INSERT INTO Messages (text, user_id, room_id) SELECT 'hi eddie2', u.id, (SELECT r.id FROM Room r  WHERE r.name = 'laurensroom') FROM User u WHERE u.name = 'lauren';";
      db.query(queryString, function(error, results){
        if(error){
          console.log("error posting message to database");
        } else {
           console.log("success posting");
        }
      });
      console.log('hi lauren');
            //call database function to insert.
      // FINALLY GOT IT WORKING!!! :)  START HERE TOMORROW
      //INSERT INTO MESSAGES (text, user_id, room_id) SELECT 'hi eddie', u.id, (SELECT r.id FROM Room r  WHERE r.name = 'fredsroom') FROM User u WHERE u.name = 'fred';
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      //select all messages from certain user??
    },
    post: function () {}
  }
};

