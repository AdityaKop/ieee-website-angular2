"use strict";
function CustomEvent(type, params) {
    if (params === void 0) { params = { bubbles: false, cancelable: false, detail: undefined }; }
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    return event;
}
exports.CustomEvent = CustomEvent;
if ("Event" in window) {
    CustomEvent.prototype = window.Event.prototype;
}
