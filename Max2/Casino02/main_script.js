function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

$(".spin-trigger").click(function() {
    $(".wheel__spinner").addClass("spin-circle");
    setTimeout(function() {
        $(".wheel__spinner").removeClass("spin-circle");
    }, 4000);
    setTimeout(function() {
        $(".fewmodal").show();
        $(".fewmodal__body").show();
    }, 4800);
});

$(".btn-claim-now").click(function() {
    $(".spin-win").fadeOut(0);
    $("#question-1").fadeIn(500);
});
$(".btn-question-1").click(function() {
    $("#question-1").fadeOut(0);
    $("#question-2").fadeIn(500);
});
$(".btn-question-2").click(function() {
    $("#question-2").fadeOut(0);
    $("#question-3").fadeIn(500);
});
$(".btn-question-3").click(function() {
    $("#question-3").fadeOut(0);
    $("#question-4").fadeIn(500);
});
$(".btn-question-4").click(function() {
    $("#question-4").fadeOut(0);
    $(".register").fadeIn(500);
});