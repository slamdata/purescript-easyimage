"use strict";

var easyimg = require("easyimage");

exports.cropInPlace = function (bounds) {
  return function (name) {
    return function (cb, eb) {
      var arg = {
        src: name,
        dst: name,
        cropwidth: bounds.w,
        cropheight: bounds.h,
        x: bounds.x,
        y: bounds.y,
        gravity: "NorthWest"
      };
      return easyimg.crop(arg).then(cb).catch(function (err) {
        return eb(new Error(err));
      });
    };
  };
};
