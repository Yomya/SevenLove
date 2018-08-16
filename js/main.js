
    function show_date_time() {
        window.setTimeout("show_date_time()", 1000);
        BirthDay = new Date("7/27/2018 00:00:00");//���������ǿ����޸ĵ�
        today = new Date();
        timeold = (today.getTime() - BirthDay.getTime());
        sectimeold = timeold / 1000
        secondsold = Math.floor(sectimeold);
        msPerDay = 24 * 60 * 60 * 1000
        e_daysold = timeold / msPerDay
        daysold = Math.floor(e_daysold);
        e_hrsold = (e_daysold - daysold) * 24;
        hrsold = Math.floor(e_hrsold);
        e_minsold = (e_hrsold - hrsold) * 60;
        minsold = Math.floor((e_hrsold - hrsold) * 60);
        seconds = Math.floor((e_minsold - minsold) * 60);
        span_dt_dt.innerHTML = daysold + "天" + hrsold + "时" + minsold + "分" + seconds + "秒";
    }
    show_date_time();
    var imgUrl = ['img/1.jpg','http://tvax1.sinaimg.cn/crop.0.0.664.664.180/006QtUAqly8fmqt1hpyb5j30ig0igmyj.jpg','https://wxt.sinaimg.cn/thumb300/006QtUAqgy1fmpyqw32n8j30hs0hsdgo.jpg','https://wxt.sinaimg.cn/thumb300/006QtUAqgy1fmah0luo53j30hi0ncaar.jpg'];
    setInterval(function () {
      document.getElementById('logo').src=imgUrl[Math.floor(imgUrl.length*Math.random())];
    },5000)
