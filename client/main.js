import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/**
* Created by Soto
* Copyright @ SotoLAB Co,.Ltd
*/ 

Template.header.helpers({
   // console.log(Meteor.user().username);  
});

Template.leaderboard.helpers({
  firstName: function() {
    return Meteor.user().username;
  }
});