var el = document.getElementById('logo');
if (el) {
    var iftarSehriTime = {
        1: { ramadan: 1, sehri: '2025-03-02 05:04:00', iftar: '2025-03-02 18:02:00' },
        2: { ramadan: 2, sehri: '2025-03-03 05:03:00', iftar: '2025-03-03 18:03:00' },
        3: { ramadan: 3, sehri: '2025-03-04 05:02:00', iftar: '2025-03-04 18:03:00' },
        4: { ramadan: 4, sehri: '2025-03-05 05:01:00', iftar: '2025-03-05 18:04:00' },
        5: { ramadan: 5, sehri: '2025-03-06 05:00:00', iftar: '2025-03-06 18:04:00' },
        6: { ramadan: 6, sehri: '2025-03-07 04:59:00', iftar: '2025-03-07 18:05:00' },
        7: { ramadan: 7, sehri: '2025-03-08 04:58:00', iftar: '2025-03-08 18:05:00' },
        8: { ramadan: 8, sehri: '2025-03-09 04:57:00', iftar: '2025-03-09 18:06:00' },
        9: { ramadan: 9, sehri: '2025-03-10 04:56:00', iftar: '2025-03-10 18:06:00' },
        10: { ramadan: 10, sehri: '2025-03-11 04:55:00', iftar: '2025-03-11 18:06:00' },
        11: { ramadan: 11, sehri: '2025-03-12 04:54:00', iftar: '2025-03-12 18:07:00' },
        12: { ramadan: 12, sehri: '2025-03-13 04:53:00', iftar: '2025-03-13 18:07:00' },
        13: { ramadan: 13, sehri: '2025-03-14 04:52:00', iftar: '2025-03-14 18:08:00' },
        14: { ramadan: 14, sehri: '2025-03-15 04:51:00', iftar: '2025-03-15 18:08:00' },
        15: { ramadan: 15, sehri: '2025-03-16 04:50:00', iftar: '2025-03-16 18:08:00' },
        16: { ramadan: 16, sehri: '2025-03-17 04:49:00', iftar: '2025-03-17 18:09:00' },
        17: { ramadan: 17, sehri: '2025-03-18 04:48:00', iftar: '2025-03-18 18:09:00' },
        18: { ramadan: 18, sehri: '2025-03-19 04:47:00', iftar: '2025-03-19 18:10:00' },
        19: { ramadan: 19, sehri: '2025-03-20 04:46:00', iftar: '2025-03-20 18:10:00' },
        20: { ramadan: 20, sehri: '2025-03-21 04:45:00', iftar: '2025-03-21 18:10:00' },
        21: { ramadan: 21, sehri: '2025-03-22 04:44:00', iftar: '2025-03-22 18:11:00' },
        22: { ramadan: 22, sehri: '2025-03-23 04:43:00', iftar: '2025-03-23 18:11:00' },
        23: { ramadan: 23, sehri: '2025-03-24 04:42:00', iftar: '2025-03-24 18:12:00' },
        24: { ramadan: 24, sehri: '2025-03-25 04:41:00', iftar: '2025-03-25 18:12:00' },
        25: { ramadan: 25, sehri: '2025-03-26 04:40:00', iftar: '2025-03-26 18:12:00' },
        26: { ramadan: 26, sehri: '2025-03-27 04:39:00', iftar: '2025-03-27 18:13:00' },
        27: { ramadan: 27, sehri: '2025-03-28 04:38:00', iftar: '2025-03-28 18:13:00' },
        28: { ramadan: 28, sehri: '2025-03-29 04:37:00', iftar: '2025-03-29 18:14:00' },
        29: { ramadan: 29, sehri: '2025-03-30 04:35:00', iftar: '2025-03-30 18:14:00' },
        30: { ramadan: 30, sehri: '2025-03-31 04:34:00', iftar: '2025-03-31 18:15:00' },
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

    var iftarTime = new Date(iftarTime1).getTime();
    var sehriTime = new Date(sehriTime1).getTime();

    //if ( (now - sehriTime) < (now - iftarTime) ) {
    if (now > iftarTime) {
        sehriTime = iftarSehriTime[nextDate].sehri;
        sehriTime = new Date(sehriTime).getTime();
    }

    // Set the date we're counting down to
    var countDownDate = new Date().getTime();

    var labelText = 'Iftar';

    var currentTimeFlag = 'iftar';

    if (now > sehriTime && iftarTime - now > 0) {
        countDownDate = iftarTime;
        labelText = 'ইফতারের <br> <div class="smalltext">সময় আছে</div>';
    } else {
        countDownDate = sehriTime;
        labelText = 'সাহ্&zwnj;রির <br> <div class="smalltext">সময় আছে</div>';
        currentTimeFlag = 'sehri';
    }

    var finalEnlishToBanglaNumber = { 0: '০', 1: '১', 2: '২', 3: '৩', 4: '৪', 5: '৫', 6: '৬', 7: '৭', 8: '৮', 9: '৯' };

    String.prototype.getDigitBanglaFromEnglish = function () {
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
            document.getElementById('iftarSehriTimeCount').innerHTML =
                '<span>' + labelText + '</span>' + days + 'day ' + hours + 'h : ' + minutes + ': m ' + seconds + ': s ';
        } else {
            document.getElementById('iftarSehriTimeCount').innerHTML = (
                "<b class='rm_city'>ঢাকায়</b><br><div><span>" +
                labelText +
                '</span></div>' +
                "<div> <span class='red'> " +
                hours +
                " <div class='smalltext'>ঘণ্টা</div>" +
                '</span></div>' +
                "<div><span class='red'>" +
                minutes +
                "<div class='smalltext'> মিনিট </div>" +
                '</span></div>' +
                "<div><span class='red'>" +
                seconds +
                " <div class='smalltext'>সেকেন্ড </div>" +
                '</span></div>'
            ).getDigitBanglaFromEnglish();
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
        document.getElementById('iftarSehriTimeCount').style.display = 'block';
    } else {
        document.getElementById('logo').style.display = 'block';
    }

    document.getElementById('iftarTS').innerHTML = (
        new Date(iftarTime1).getHours() -
        12 +
        ':' +
        new Date(iftarTime1).getMinutes()
    ).getDigitBanglaFromEnglish();
    document.getElementById('sehriTS').innerHTML = (
        new Date(iftarSehriTime[nextDate].sehri).getHours() +
        ':' +
        new Date(iftarSehriTime[nextDate].sehri).getMinutes()
    ).getDigitBanglaFromEnglish();

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
