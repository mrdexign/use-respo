"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useWindowSize = function () {
    var _a = react_1.useState({ width: 0, height: 0 }), windowSize = _a[0], setWindowSize = _a[1];
    react_1.useEffect(function () {
        var handleResize = function () {
            return setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return windowSize;
};
exports.default = useWindowSize;
