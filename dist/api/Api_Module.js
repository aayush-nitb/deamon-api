"use strict";
var express_1 = require('express');
var Api_v1_1 = require('./v1/Api_v1');
var Api_v2_1 = require('./v2/Api_v2');
var Api_Module = (function () {
    function Api_Module(app) {
        this.app = app;
        //noop
    }
    Api_Module.prototype.serve = function () {
        var api = express_1.Router();
        Api_v1_1.Api_v1.serve(api);
        Api_v2_1.Api_v2.serve(api);
        this.app.use('/api', api);
    };
    Api_Module.prototype.allowCors = function () {
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
    };
    Api_Module.prototype.handleError = function () {
        this.app.use(function (req, res, next) {
            res.status(404);
            res.json({
                title: 'Error',
                message: "Not Found"
            });
        });
    };
    return Api_Module;
}());
exports.Api_Module = Api_Module;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx3QkFBb0MsU0FDcEMsQ0FBQyxDQUQ0QztBQUM3Qyx1QkFBdUIsYUFDdkIsQ0FBQyxDQURtQztBQUNwQyx1QkFBdUIsYUFFdkIsQ0FBQyxDQUZtQztBQUVwQztJQUNJLG9CQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hDLE1BQU07SUFDVixDQUFDO0lBQ0QsMEJBQUssR0FBTDtRQUNJLElBQUksR0FBRyxHQUFVLGdCQUFNLEVBQUUsQ0FBQztRQUMxQixlQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGVBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7WUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLGdEQUFnRCxDQUFDLENBQUM7WUFDN0YsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxnQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7WUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNMLEtBQUssRUFBRSxPQUFPO2dCQUNkLE9BQU8sRUFBRSxXQUFXO2FBQ3ZCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSxrQkFBVSxhQTBCdEIsQ0FBQSIsImZpbGUiOiJhcGkvQXBpX01vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpY2F0aW9uLCBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgQXBpX3YxIH0gZnJvbSAnLi92MS9BcGlfdjEnXG5pbXBvcnQgeyBBcGlfdjIgfSBmcm9tICcuL3YyL0FwaV92MidcblxuZXhwb3J0IGNsYXNzIEFwaV9Nb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwOiBBcHBsaWNhdGlvbikge1xuICAgICAgICAvL25vb3BcbiAgICB9XG4gICAgc2VydmUoKSB7XG4gICAgICAgIGxldCBhcGk6Um91dGVyID0gUm91dGVyKCk7XG4gICAgICAgIEFwaV92MS5zZXJ2ZShhcGkpO1xuICAgICAgICBBcGlfdjIuc2VydmUoYXBpKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKCcvYXBpJywgYXBpKTtcbiAgICB9XG4gICAgYWxsb3dDb3JzKCkge1xuICAgICAgICB0aGlzLmFwcC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgICAgICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0Jyk7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVFcnJvcigpIHtcbiAgICAgICAgdGhpcy5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDQpO1xuICAgICAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm90IEZvdW5kXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19
