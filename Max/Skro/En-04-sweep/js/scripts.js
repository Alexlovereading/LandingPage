/* $(".click-here").on('click', function () {
    $(".custom-model-main").addClass('model-open');
}); */
$(".repeat-btn").click(function() {
    $(".custom-model-main").removeClass('model-open model-open-1 model-open-2');
});

$(".close-btn").click(function() {
    /* $(".custom-model-main").removeClass('model-open model-open-1 model-open-2'); */
    if ($(".custom-model-main").hasClass('model-open-1')) {
        $(".custom-model-main").removeClass('model-open model-open-1 model-open-2');
        theWheel.startAnimation();
    } else if ($(".custom-model-main").hasClass('model-open-2')) {
        $(".custom-model-main").removeClass('model-open model-open-1 model-open-2');
        startSpin();
    }
});

setTimeout(() => {
    $(".custom-model-main").addClass('model-open model-open-1');
}, 500);

setInterval('countdown()', 1000);

function countdown() {
    var mins = parseInt(document.getElementById("mins").innerHTML);
    var secs = parseInt(document.getElementById("hsecs").innerHTML);
    if (mins != 0 && secs == 0) {
        nmins = mins - 1;
        nsecs = 59;
    } else if (mins != 0 || secs != 0) {
        nmins = mins;
        nsecs = secs - 1;
    } else if (mins == 0 && secs == 0) {
        nmins = mins;
        nsecs = secs;
    }
    document.getElementById("mins").innerHTML = nmins;
    document.getElementById("hsecs").innerHTML = nsecs;
    if (nsecs < 10) nsecs = "0" + nsecs;
    document.getElementById("hsecs").innerHTML = nsecs;
}

countdown();