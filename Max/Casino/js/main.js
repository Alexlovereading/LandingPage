$(document).ready(function() {
    var spinning = false;

    $('.spinner__button').click(function() {
        if (!spinning) {
            spinning = true;

            setTimeout(function() {
                $('.col-one').addClass('spinned');
            }, 0);

            setTimeout(function() {
                $('.col-two').addClass('spinned');
            }, 500);

            setTimeout(function() {
                $('.col-three').addClass('spinned');
            }, 1000);

            setTimeout(function() {
                setTimeout(function() {
                    $('.main__popup').removeClass('opacity');
                }, 500);

                spinning = false;
            }, 4000);
        }
    });
});