var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM Messages');
    }, // a function which produces all the messages
    post: function (message) {
      db.query  -- construct based on below

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

