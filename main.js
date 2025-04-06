!function() {
    "use strict";
    var e = document.querySelector(".js-scroll");
    e && new ScrollMagic.Scene({
        triggerElement: e,
        duration: 1e3,
        triggerHook: .9
    }).setClassToggle(e, "is-active").addTo(new ScrollMagic.Controller)
}();
