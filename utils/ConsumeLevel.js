define([], function () {
    //积分 true买  false卖
    var getImaglst = function (Star, IsBuy) {
        this.Imaglst = [];
        //心
        function setStar(count) {
            for (var i = 0; i < count; i++) {
                Imaglst.push("b_rate_1.png");
            }
        }
        //皇钻
        function setYDimond(count) {
            for (var i = 0; i < count + 1; i++) {
                var img = '';
                if (IsBuy == true) {
                    img = "b_rate_2.png";
                }
                else {
                    img = "s_rate_2.png";
                }
                Imaglst.push(img);
            }
        }

        //皇冠
        function setYCrown(count) {
            for (var i = 0; i < count + 1; i++) {
                var img = '';
                if (IsBuy == true) {
                    img = "b_rate_3.png";
                }
                else {
                    img = "s_rate_3.png";
                }
                Imaglst.push(img);
            }
        }

        //顶级皇冠
        function setTopCrown(count) {
            for (var i = 0; i < count + 1; i++) {
                var img = '';
                if (IsBuy == true) {
                    img = "b_rate_4.png";
                }
                else {
                    img = "s_rate_4.png";
                }
                Imaglst.push(img);
            }
        }

        if (Star <= 5) {
            setStar(Star);
            return Imaglst;
        }
        else if (Star <= 10) {
            setYDimond(Star-5);
            return Imaglst;
        }
        else if (Star <= 15) {
            setYCrown(1-10);
            return Imaglst;
        }
        else if (Star <= 20) {
            setTopCrown(1-15);
            return Imaglst;
        }
        else if (Star > 20) {
            {
                setTopCrown(5);
                return Imaglst;
            }
        }
    }
    return getImaglst;
})
