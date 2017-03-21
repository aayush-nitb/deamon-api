"use strict";
var Api_Module = (function () {
    function Api_Module(app) {
        this.app = app;
        //noop
    }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9BcGlfTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJQTtJQUNJLG9CQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hDLE1BQU07SUFDVixDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxnREFBZ0QsQ0FBQyxDQUFDO1lBQzdGLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsZ0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO1lBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxLQUFLLEVBQUUsT0FBTztnQkFDZCxPQUFPLEVBQUUsV0FBVzthQUN2QixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxpQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksa0JBQVUsYUFvQnRCLENBQUEiLCJmaWxlIjoiYXBpL0FwaV9Nb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgUm91dGVyIH0gZnJvbSAnZXhwcmVzcydcclxuaW1wb3J0IHsgQXBpX3YxIH0gZnJvbSAnLi92MS9BcGlfdjEnXHJcbmltcG9ydCB7IEFwaV92MiB9IGZyb20gJy4vdjIvQXBpX3YyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwaV9Nb2R1bGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uKSB7XHJcbiAgICAgICAgLy9ub29wXHJcbiAgICB9XHJcbiAgICBhbGxvd0NvcnMoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xyXG4gICAgICAgICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJywgJ09yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHQnKTtcclxuICAgICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlRXJyb3IoKSB7XHJcbiAgICAgICAgdGhpcy5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDQwNCk7XHJcbiAgICAgICAgICAgIHJlcy5qc29uKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJOb3QgRm91bmRcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==
