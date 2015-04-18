var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      console.log('getting from database');
      var queryString = "SELECT Messages.id, Messages.text, User.username, Room.roomname FROM Messages, User, Room WHERE user.id = Messages.user_id AND Room.id = Messages.room_id;";
      db.query(queryString, function(err, rows, fields){
        if (err){
          console.log('error getting messages from database');
        } else {
          callback(rows);
        }
      });
    }, // a function which produces all the messages
    post: function (message) {
      var queryArgs = [message.message, message.roomname, message.username];
      var queryString = ("INSERT INTO Messages (text, user_id, room_id) SELECT '" + queryArgs[0] + "', u.id, (SELECT r.id FROM Room r  WHERE r.roomname = '" + queryArgs[1] + "') FROM User u WHERE u.username = '" + queryArgs[2] + "';");
      // var queryString = "INSERT INTO Messages (text, user_id, room_id) SELECT 'hi eddie2', u.id, (SELECT r.id FROM Room r  WHERE r.name = 'laurensroom') FROM User u WHERE u.name = 'lauren';";

      //call database function to insert.
      db.query(queryString, function(error, results){
        if(error){
          console.log("error posting message to database");
        } else {
           console.log("success posting");
        }
      });
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

