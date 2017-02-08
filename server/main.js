import { Meteor } from 'meteor/meteor';

var ncp = require('ncp');
var fs = require('fs');

Meteor.startup(() => {
    if (!fs.existsSync(`${process.env.PWD}/public`)) {
        fs.mkdirSync(`${process.env.PWD}/public`);
    }
    ncp(`${process.env.PWD}/node_modules/creative/img`, `${process.env.PWD}/public/img`);
});
