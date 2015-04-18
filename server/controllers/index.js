var models = require('../models');
var bluebird = require('bluebird');
var utils = require('./utils')


module.exports = {
  messages: {
    get: function (req, res) {
      utils.sendResponse(response, models.messages.get());

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      utils.collectData(request, function(message){
        models.messages.post(message);
        utils.sendResponse(response, {objectId: 1}, 201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


//Needed?
  // 'OPTIONS': function(request, response){
  //   utils.sendResponse(response);
  // }


