//Javascript Versions
// ES5 (Supported by all browsers)
//ES6(2015) arrows,classes,template string,let,cost,[...arrays]
//es7 es2016 Array.prototype.includes
//ES8 2017
// const myname = "Veysel";
// const fullname = `My name is  ${myname}`;
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myArray = ["coding", "with", "Didem"];
var copyArray = __spreadArray([], myArray, true);
