"use strict";
var express_1 = require('express');
var Api_v2 = (function () {
    function Api_v2(router) {
        var api = express_1.Router();
        api.get('/', this.get);
        router.use('/v2', api);
    }
    Api_v2.serve = function (router) {
        new Api_v2(router);
    };
    Api_v2.prototype.get = function (req, res) {
        res.json({
            title: 'OK',
            message: 'Hello World'
        });
    };
    return Api_v2;
}());
exports.Api_v2 = Api_v2;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS92Mi9BcGlfdjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUEwRCxTQUUxRCxDQUFDLENBRmtFO0FBRW5FO0lBSUksZ0JBQVksTUFBYztRQUN0QixJQUFJLEdBQUcsR0FBRyxnQkFBTSxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFQTSxZQUFLLEdBQVosVUFBYSxNQUFjO1FBQ3ZCLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFNRCxvQkFBRyxHQUFILFVBQUksR0FBWSxFQUFFLEdBQWE7UUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLEtBQUssRUFBRSxJQUFJO1lBQ1gsT0FBTyxFQUFFLGFBQWE7U0FDekIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGNBQU0sU0FlbEIsQ0FBQSIsImZpbGUiOiJhcGkvdjIvQXBpX3YyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdEhhbmRsZXIsIFJvdXRlciwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaV92MiB7XHJcbiAgICBzdGF0aWMgc2VydmUocm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICBuZXcgQXBpX3YyKHJvdXRlcik7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIGxldCBhcGkgPSBSb3V0ZXIoKTtcclxuICAgICAgICBhcGkuZ2V0KCcvJywgdGhpcy5nZXQpO1xyXG4gICAgICAgIHJvdXRlci51c2UoJy92MicsIGFwaSk7XHJcbiAgICB9XHJcbiAgICBnZXQocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICB0aXRsZTogJ09LJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0hlbGxvIFdvcmxkJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19
