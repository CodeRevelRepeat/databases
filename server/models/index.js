var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM Messages');
    }, // a function which produces all the messages
    post: function (message) {
      //call database function to insert.
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

