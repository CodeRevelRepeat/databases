var models = require('../models');
var bluebird = require('bluebird');
var utils = require('./utils')


module.exports = {
  messages: {
    get: function (req, res) {
      utils.sendResponse(response, {results: messages});

    }, // a function which handles a get request for all messages
    post: function (req, res) {



    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};



var utils = require('./utils');

var objectId = 1;
var messages = [];

var actions = {
  'GET': function(request, response){
    utils.sendResponse(response, {results: messages});
  },
  'POST': function(request, response){
    utils.collectData(request, function(message){
      message.objectId = ++objectId;
      messages.push(message);
      utils.sendResponse(response, {objectId: 1}, 201);
    });
  },
  'OPTIONS': function(request, response){
    utils.sendResponse(response);
  }
};

exports.requestHandler = function(request, response) {
  var action = actions[request.method];
  if( action ){
    action(request, response);
  } else {
    utils.sendResponse(response, "Not Found", 404);
  }
};
