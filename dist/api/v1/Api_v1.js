"use strict";
var express_1 = require('express');
var Commons_Config_1 = require('../../commons/Commons_Config');
var Api_v1 = (function () {
    function Api_v1(router) {
        var api = express_1.Router();
        api.get('/', this.get);
        router.use('/v1', api);
    }
    Api_v1.serve = function (router) {
        new Api_v1(router);
    };
    Api_v1.prototype.get = function (req, res) {
        res.json({
            title: 'OK',
            environment: Commons_Config_1.Commons_Config.env,
            message: 'Hello World'
        });
    };
    return Api_v1;
}());
exports.Api_v1 = Api_v1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS92MS9BcGlfdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUEwRCxTQUMxRCxDQUFDLENBRGtFO0FBQ25FLCtCQUErQiw4QkFFL0IsQ0FBQyxDQUY0RDtBQUU3RDtJQUlJLGdCQUFZLE1BQWM7UUFDdEIsSUFBSSxHQUFHLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBUE0sWUFBSyxHQUFaLFVBQWEsTUFBYztRQUN2QixJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBTUQsb0JBQUcsR0FBSCxVQUFJLEdBQVksRUFBRSxHQUFhO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLLEVBQUUsSUFBSTtZQUNYLFdBQVcsRUFBRSwrQkFBYyxDQUFDLEdBQUc7WUFDL0IsT0FBTyxFQUFFLGFBQWE7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBO0FBaEJZLGNBQU0sU0FnQmxCLENBQUEiLCJmaWxlIjoiYXBpL3YxL0FwaV92MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RIYW5kbGVyLCBSb3V0ZXIsIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgQ29tbW9uc19Db25maWcgfSBmcm9tICcuLi8uLi9jb21tb25zL0NvbW1vbnNfQ29uZmlnJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaV92MSB7XHJcbiAgICBzdGF0aWMgc2VydmUocm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBuZXcgQXBpX3YxKHJvdXRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIGxldCBhcGkgPSBSb3V0ZXIoKTtcclxuICAgICAgICBhcGkuZ2V0KCcvJywgdGhpcy5nZXQpO1xyXG4gICAgICAgIHJvdXRlci51c2UoJy92MScsIGFwaSk7XHJcbiAgICB9XHJcbiAgICBnZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICB0aXRsZTogJ09LJyxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IENvbW1vbnNfQ29uZmlnLmVudixcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0hlbGxvIFdvcmxkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
