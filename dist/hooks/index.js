"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClassPrefix = void 0;
var useClassPrefix = function (prefix) {
    var apply = function (classNames) {
        return classNames
            .split(" ")
            .map(function (c) { return "".concat(prefix, "-").concat(c); })
            .join(" ");
    };
    return apply;
};
exports.useClassPrefix = useClassPrefix;
