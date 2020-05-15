var el = document.getElementById("logo");
if (el) {
    var iftarSehriTime = {
        1: { 'ramadanNo': 1, 'sehri': '2020-05-01 03:59:00', 'iftar': '2020-05-01 18:31:00' },
        2: { 'ramadanNo': 2, 'sehri': '2020-05-02 03:58:00', 'iftar': '2020-05-02 18:31:00' },
        3: { 'ramadanNo': 3, 'sehri': '2020-05-03 03:57:00', 'iftar': '2020-05-03 18:32:00' },

        4: { 'ramadanNo': 4, 'sehri': '2020-05-04 03:55:00', 'iftar': '2020-05-04 18:32:00' },
        5: { 'ramadanNo': 5, 'sehri': '2020-05-05 03:54:00', 'iftar': '2020-05-05 18:33:00' },
        6: { 'ramadanNo': 6, 'sehri': '2020-05-06 03:53:00', 'iftar': '2020-05-06 18:33:00' },
        7: { 'ramadanNo': 7, 'sehri': '2020-05-07 03:52:00', 'iftar': '2020-05-07 18:34:00' },
        8: { 'ramadanNo': 8, 'sehri': '2020-05-08 03:51:00', 'iftar': '2020-05-08 18:34:00' },
        9: { 'ramadanNo': 9, 'sehri': '2020-05-09 03:50:00', 'iftar': '2020-05-09 18:35:00' },
        10: { 'ramadanNo': 10, 'sehri': '2020-05-10 03:50:00', 'iftar': '2020-05-10 18:35:00' },
        11: { 'ramadanNo': 11, 'sehri': '2020-05-11 03:49:00', 'iftar': '2020-05-11 18:36:00' },
        12: { 'ramadanNo': 12, 'sehri': '2020-05-12 03:49:00', 'iftar': '2020-05-12 18:36:00' },
        13: { 'ramadanNo': 13, 'sehri': '2020-05-13 03:48:00', 'iftar': '2020-05-13 18:36:00' },
        15: { 'ramadanNo': 14, 'sehri': '2020-05-14 03:48:00', 'iftar': '2020-05-14 18:37:00' },
        15: { 'ramadanNo': 15, 'sehri': '2020-05-15 03:47:00', 'iftar': '2020-05-15 18:37:00' },
        16: { 'ramadanNo': 16, 'sehri': '2020-05-16 03:47:00', 'iftar': '2020-05-16 18:38:00' },
        17: { 'ramadanNo': 17, 'sehri': '2020-05-17 03:46:00', 'iftar': '2020-05-17 18:38:00' },
        18: { 'ramadanNo': 18, 'sehri': '2020-05-18 03:46:00', 'iftar': '2020-05-18 18:39:00' },
        19: { 'ramadanNo': 19, 'sehri': '2020-05-19 03:45:00', 'iftar': '2020-05-19 18:39:00' },
        20: { 'ramadanNo': 20, 'sehri': '2020-05-20 03:44:00', 'iftar': '2020-05-20 18:40:00' },
        21: { 'ramadanNo': 21, 'sehri': '2020-05-21 03:44:00', 'iftar': '2020-05-21 18:32:00' },
        22: { 'ramadanNo': 22, 'sehri': '2020-05-22 03:43:00', 'iftar': '2020-05-22 18:41:00' },
        23: { 'ramadanNo': 23, 'sehri': '2020-05-23 03:43:00', 'iftar': '2020-05-23 18:42:00' },
        24: { 'ramadanNo': 24, 'sehri': '2020-05-24 03:42:00', 'iftar': '2020-05-24 18:42:00' },

        25: { 'ramadanNo': 25, 'sehri': '2020-04-25 04:05:00', 'iftar': '2020-04-25 18:28:00' },
        26: { 'ramadanNo': 26, 'sehri': '2020-04-26 04:04:00', 'iftar': '2020-04-26 18:29:00' },
        27: { 'ramadanNo': 27, 'sehri': '2020-04-27 04:03:00', 'iftar': '2020-04-27 18:29:00' },
        28: { 'ramadanNo': 28, 'sehri': '2020-04-28 04:02:00', 'iftar': '2020-04-28 18:29:00' },
        29: { 'ramadanNo': 29, 'sehri': '2020-04-29 04:01:00', 'iftar': '2020-04-29 18:30:00' },
        30: { 'ramadanNo': 30, 'sehri': '2020-04-30 04:00:00', 'iftar': '2020-04-29 18:30:00' }
    };

    var now = new Date().getTime();
    var currentDate = new Date().getDate();

    var currParsedDate = parseInt(currentDate);
    var nextDate = currParsedDate + 1;
    if (currParsedDate == 30) {
        nextDate = 1;
    }

    var iftarTime1 = iftarSehriTime[currParsedDate].iftar;
    var sehriTime1 = iftarSehriTime[currParsedDate].sehri;

    iftarTime = new Date(iftarTime1).getTime();
    sehriTime = new Date(sehriTime1).getTime();

    //if ( (now - sehriTime) < (now - iftarTime) ) {
    if (now > iftarTime) {
        sehriTime = iftarSehriTime[nextDate].sehri;
        sehriTime = new Date(sehriTime).getTime();
    }

    // Set the date we're counting down to
    var countDownDate = new Date().getTime();

    var labelText = 'Iftar';

    var currentTimeFlag = 'iftar';

    if (now > sehriTime && (iftarTime - now) > 0) {
        countDownDate = iftarTime;
        labelText = 'ইফতারের <br> <div class="smalltext">সময় আছে</div>';
    } else {
        countDownDate = sehriTime;
        labelText = 'সাহ্&zwnj;রির <br> <div class="smalltext">সময় আছে</div>';
        currentTimeFlag = 'sehri';
    }

    var finalEnlishToBanglaNumber = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };

    String.prototype.getDigitBanglaFromEnglish = function() {
        var retStr = this;
        for (var x in finalEnlishToBanglaNumber) {
            retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
        }
        return retStr;
    };

    function update() {
        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var s = Math.floor((distance % (1000 * 60)) / 1000);

        var hours = ('0' + h).slice(-2);
        var minutes = ('0' + m).slice(-2);
        var seconds = ('0' + s).slice(-2);

        // Display the result in the element with id="iftarSahriTimeCount"
        if (days > 0) {
            document.getElementById("iftarSehriTimeCount").innerHTML = "<span>" + labelText + "</span>" + days + "day " + hours + "h : " + minutes + ": m " + seconds + ": s ";
        } else {
            document.getElementById("iftarSehriTimeCount").innerHTML = ("<b class='rm_city'>ঢাকায়</b><br><div><span>" + labelText + "</span></div>" + "<div> <span class='red'> " + hours + " <div class='smalltext'>ঘণ্টা</div>" + "</span></div>" + "<div><span class='red'>" + (minutes) + "<div class='smalltext'> মিনিট </div>" + "</span></div>" + "<div><span class='red'>" + seconds + " <div class='smalltext'>সেকেন্ড </div>" + "</span></div>").getDigitBanglaFromEnglish();
        }
    }

    // start before 1 hours
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // alert(distance);

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    if (hours < 2) {
        document.getElementById("iftarSehriTimeCount").style.display = "block";
    } else {
        document.getElementById("logo").style.display = "block";
    }

    document.getElementById("iftarTS").innerHTML = ((new Date(iftarTime1).getHours() - 12) + ':' + new Date(iftarTime1).getMinutes()).getDigitBanglaFromEnglish();
    document.getElementById("sehriTS").innerHTML = (new Date(iftarSehriTime[nextDate].sehri).getHours() + ':' + new Date(iftarSehriTime[nextDate].sehri).getMinutes()).getDigitBanglaFromEnglish();

    if (distance < 0) {
        //  clearInterval(x);
        if (currentTimeFlag == 'iftar') {
            sehriTime = iftarSehriTime[nextDate].sehri;
            sehriTime = new Date(sehriTime).getTime();

            countDownDate = sehriTime;
            labelText = 'সাহ্&zwnj;রির <br> <div class="smalltext">সময় আছে</div>';
        } else {
            countDownDate = iftarTime;
            labelText = 'ইফতারের <br> <div class="smalltext">সময় আছে</div>';
        }
    }
    // Update the count down every 1 second
    update();
    var x = setInterval(update, 1000);
}