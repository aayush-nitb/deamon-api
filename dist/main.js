"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var Commons_Config_1 = require('./commons/Commons_Config');
var Api_Module_1 = require('./api/Api_Module');
var app = express();
var api = new Api_Module_1.Api_Module(app);
//let mongoose = require('mongoose');
//mongoose.connect(Commons_Config.current.mongoConnectionString);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
if (Commons_Config_1.Commons_Config.env == 'development')
    api.allowCors();
api.serve();
api.handleError();
var server = app.listen(Commons_Config_1.Commons_Config.current.port, function () {
    console.log('Server listening on port' + Commons_Config_1.Commons_Config.current.port);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLFNBQ3pCLENBQUMsQ0FEaUM7QUFDbEMsSUFBWSxVQUFVLFdBQU0sYUFFNUIsQ0FBQyxDQUZ3QztBQUV6QywrQkFBK0IsMEJBQy9CLENBQUMsQ0FEd0Q7QUFDekQsMkJBQTJCLGtCQUUzQixDQUFDLENBRjRDO0FBRTdDLElBQUksR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztBQUN6QyxJQUFJLEdBQUcsR0FBZSxJQUFJLHVCQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFMUMscUNBQXFDO0FBQ3JDLGlFQUFpRTtBQUVqRSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkQsRUFBRSxDQUFDLENBQUMsK0JBQWMsQ0FBQyxHQUFHLElBQUksYUFBYSxDQUFDO0lBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3pELEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNaLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUVsQixJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLCtCQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixHQUFHLCtCQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJ1xuXG5pbXBvcnQgeyBDb21tb25zX0NvbmZpZyB9IGZyb20gJy4vY29tbW9ucy9Db21tb25zX0NvbmZpZydcbmltcG9ydCB7IEFwaV9Nb2R1bGUgfSBmcm9tICcuL2FwaS9BcGlfTW9kdWxlJ1xuXG5sZXQgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xubGV0IGFwaTogQXBpX01vZHVsZSA9IG5ldyBBcGlfTW9kdWxlKGFwcCk7XG5cbi8vbGV0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbi8vbW9uZ29vc2UuY29ubmVjdChDb21tb25zX0NvbmZpZy5jdXJyZW50Lm1vbmdvQ29ubmVjdGlvblN0cmluZyk7XG5cbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5pZiAoQ29tbW9uc19Db25maWcuZW52ID09ICdkZXZlbG9wbWVudCcpIGFwaS5hbGxvd0NvcnMoKTtcbmFwaS5zZXJ2ZSgpO1xuYXBpLmhhbmRsZUVycm9yKCk7XG5cbmxldCBzZXJ2ZXIgPSBhcHAubGlzdGVuKENvbW1vbnNfQ29uZmlnLmN1cnJlbnQucG9ydCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTZXJ2ZXIgbGlzdGVuaW5nIG9uIHBvcnQnICsgQ29tbW9uc19Db25maWcuY3VycmVudC5wb3J0KTtcbn0pOyJdfQ==