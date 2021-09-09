"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useWindowSize_1 = __importDefault(require("./useWindowSize"));
var breakpoint = { xs: 280, sm: 576, md: 992, lg: 1400, xl: 1800 };
var getDeviceConfig = function (width, br) {
    if (br === void 0) { br = breakpoint; }
    if (width < br.xs)
        return 'xs';
    if (br.xs <= width && width < br.sm)
        return 'sm';
    if (br.sm <= width && width < br.md)
        return 'md';
    if (br.md <= width && width < br.lg)
        return 'lg';
    return 'xl';
};
var useRespo = function (breakPoint) {
    if (breakPoint === void 0) { breakPoint = breakpoint; }
    var width = useWindowSize_1.default().width;
    var brkPnt = getDeviceConfig(width, breakPoint);
    var Device = function (brk) {
        return function (_a) {
            var children = _a.children, down = _a.down, up = _a.up, onDown = _a.onDown, onUp = _a.onUp;
            var isIn = brkPnt === brk;
            var isDown = width < breakpoint[brk];
            var isUp = width > breakpoint[brk];
            var condition = (down && isDown) || (up && isUp) || isIn;
            isUp && (onUp === null || onUp === void 0 ? void 0 : onUp());
            isDown && (onDown === null || onDown === void 0 ? void 0 : onDown());
            return jsx_runtime_1.jsx(react_1.Fragment, { children: condition && children }, void 0);
        };
    };
    return {
        Tiny: Device('xs'),
        Mobile: Device('sm'),
        Tablet: Device('md'),
        Laptop: Device('lg'),
        Tv: Device('xl'),
    };
};
exports.default = useRespo;
