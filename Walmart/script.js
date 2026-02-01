document.addEventListener("DOMContentLoaded", () => {
    const quizSection = document.getElementById("quiz-section");

    if (quizSection) {
        quizSection.style.display = "none";
        quizSection.style.opacity = 0;
    }
});

function isQuestionAnswered(questionNumber) {
    const radios = document.getElementsByName("q" + questionNumber);
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    return false;
}

function startQuiz() {
    const quizSection = document.getElementById("quiz-section");
    const giftImage = document.querySelector(".product-img");
    const benefitsWrap = document.querySelector(".benefits-wrap");
    const headerSection = document.getElementById("header-section");

    giftImage.style.transform = "scale(0.9)";
    giftImage.classList.add("shrunk");
    headerSection.classList.add("quiz-active");

    benefitsWrap.style.transition = "opacity 0.4s ease";
    benefitsWrap.style.opacity = 0;
    setTimeout(() => {
        benefitsWrap.style.display = "none";
    }, 400);

    quizSection.style.display = "block";
    setTimeout(() => {
        quizSection.classList.add("active");
    }, 10);

    const firstStep = document.getElementById("question1");
    if (firstStep) {
        firstStep.style.display = "block";
        setTimeout(() => firstStep.classList.add("active"), 10);
    }
}

function nextQuestion(current) {
    if (!isQuestionAnswered(current)) {
        alert("Please select an answer to continue.");
        return;
    }

    const currEl = document.getElementById("question" + current);
    const nextEl = document.getElementById("question" + (current + 1));

    currEl.classList.remove("active");
    setTimeout(() => {
        currEl.style.display = "none";

        if (nextEl) {
            nextEl.style.display = "block";
            setTimeout(() => nextEl.classList.add("active"), 10);
        }
    }, 300);
}

function showLoading() {
    const quizSection = document.getElementById("quiz-section");
    const loading = document.getElementById("quiz-loading");
    const result = document.getElementById("quiz-result");
    const msgs = ["msg1", "msg2", "msg3"];

    quizSection.classList.remove("active");
    setTimeout(() => {
        quizSection.style.display = "none";
        loading.style.display = "block";

        msgs.forEach((id, i) => {
            setTimeout(() => document.getElementById(id).classList.add("show"), i * 1500);
        });

        setTimeout(() => {
            loading.style.display = "none";
            result.style.display = "block";
            setTimeout(() => result.classList.add("active"), 10);
        }, 5500);
    }, 300);
}

var text_remaining = 6;
var visible = 5;

jQuery.fn.orderBy = function (keySelector, order) {
    return this.sort(function (a, b) {
        a = keySelector.apply(a);
        b = keySelector.apply(b);
        if (order == "newest") {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        } else if (order == "oldest" || order == "top") {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
        }
    });
};

$(document).ready(function () {
    setTimeout(function () {
        $(".sorting-box > p").html("130 comments");
        $(".start-coms").removeClass("start-coms");
    }, 250);

    $(document).on('click', 'textarea', function () {
        $(".add-comment").addClass("active");
    });

    $(".comment-button-left [type=checkbox]").on('change', function () {
        if ($(this).is(":checked") && text_remaining > 0) {
            $(".comment-button-left p").show();
            $(".comment-button-right button").addClass("disabled").prop("disabled", true);
        } else {
            $(".comment-button-left p").hide();
            $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
        }
    });

    $(document).on('click', '.sort > button', function () {
        var $this = $(this);
        $this.next().is(":visible") ? $this.next().hide() : $this.next().show();
    });

    $(document).on('click', '.dropdown-sort button', function () {
        var $this = $(this);
        var sort_by = $this.data("sort") == "top" ? "likes" : "order";
        $this.parent().hide();
        $this.parent().find(".selected").removeClass("selected");
        $this.addClass("selected");
        $(".sort > button span").html($this.find("span").html());
        $(".sort-coms").orderBy(function () {
            return +$(this).data(sort_by);
        }, $this.data("sort")).appendTo(".main-comments");
        $(".inner-sorting-box > svg").css({ display: "inline-block" });
        setTimeout(function () {
            $(".inner-sorting-box > svg").hide();
        }, 200);
        $(".sort-coms").hide();
        for (var i = 0; i < visible; i++) {
            $(".main-comments > :hidden:first").show();
        }
    });

    $(document).on('click', '.load-more', function () {
        var elem = $(".main-comments > :hidden").length < 5 ? $(".main-comments > :hidden").length : 5;
        for (var i = 0; i < elem; i++) {
            $(".main-comments > :hidden:first").show();
        }
        visible = visible + elem;
        if (visible == $(".sort-coms").length) {
            $(this).addClass("end-coms").prop("disabled", true).find("span").html("Loading...");
        }
    });

    $("textarea").keyup(function () {
        var text_length = $(this).val().length;
        text_length <= 0 ? $(".comment-button-right button").addClass("disabled").prop("disabled", true) : $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
        text_remaining = 6 - text_length;
        $(".comment-button-left p").html("Write " + text_remaining + " more characters to post to Facebook");
        if ($(".comment-button-left [type=checkbox]").is(":checked")) {
            if (text_remaining <= 0) {
                $(".comment-button-left p").hide();
                $(".comment-button-right button").removeClass("disabled").prop("disabled", false);
            } else {
                $(".comment-button-left p").show();
                $(".comment-button-right button").addClass("disabled").prop("disabled", true);
            }
        }
    });

    $(".comment-button-right button").on('click', function () {
        alert("Comments are disabled by the author.")
    });

    $(".comment-meta button").on('click', function () {
        alert("Action prohibited. You are not authenticated.");
    });
});