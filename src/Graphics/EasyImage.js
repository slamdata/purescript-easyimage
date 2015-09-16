// module Graphics.EasyImage

var easyimg = require("easyimage");

exports.cropInPlace = function(w) {
    return function(h) {
        return function(x) {
            return function(y) {
                return function(name) {
                    return function(cb, eb) {
                        var arg = {
                            src: name,
                            dst: name,
                            cropwidth: w,
                            cropheight: h,
                            x: x,
                            y: y,
                            gravity: 'NorthWest'
                        };
                        return easyimg.crop(arg).then(cb).catch(function(err) {
                            return eb(new Error(err));
                        });
                    };
                };
            };
        };
    };
};
