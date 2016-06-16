define(["jquery", "jquerytmpl", 'NavibarCtl', "../utils/SysUrl", '../utils/Common', '../utils/ConsumeLevel',
    "../utils/SysConfig", '../moduler/rs_NewRequire', '../moduler/rs_RequireMyGoods', "../viewmodel/ReqMyGdViewModel",
    '../viewmodel/NewRequireViewModel', '../viewmodel/Dis_DelRequireViewModel'],
    function ($, jquerytmpl, NavibarCtl, SysUrl, Common, ConsumeLevel, SysConfig, rs_NewRequire, rs_RequireMyGoods,
        ReqMyGdViewModel, Dis_DelRequireViewModel) {
        var OverTimeCtl = function (user) {

            //当前页控件
            this.tempPanel = $(".findD-none");
            this.LeftPanel = $(".vien-left");
            this.RightPanel = $(".vien-right");

            this.lbPunishCount = $('.LbPushCount');
            this.lbOfferCount = $('.LbOfferCount');

            this.lbStartTime = $(".LbStartTime");
            this.lbSeries = $('.LbSeries');
            this.lbDetail = $('.LbDetail');

            //总找货中
            this.TotalOverTime = 0;

            //找货模板--2017
            this.TmplRequireMarkUp = $("#OverTimeTemplate");
            this.RequireMarkUp = $(".OverTimeMarkUp");

            //失效找货model
            this.OverTimeModel = new ReqMyGdViewModel();

            //登录用户
            this.LoginUser = user;

            //删除找货信息
            this.DeleteRequireModel = new Dis_DelRequireViewModel();

            this.RequirePageNo = window.SysInfo.Paging.VisiblePages;
            this.RequirePageSize = window.SysInfo.Paging.DftPageSize;

            //当前选中的求购信息ID
            this.CurrentRequireID = null;
            //当前报价ID
            this.CurrentOfferID = null;

            //当前找货列表
            this.CurrentRequireLst = [];
            //当前找货
            this.CurrentRequire = {};
            //第一次加载
            this.IsFirstQuery = true;

            //地址
            this.Address = { city: "无锡市", province: "江苏省", district: '' };

            this.init();
        }

        OverTimeCtl.prototype = {
            init: function () {
                var self = this;
                //Redirect When the user isn't login system.
                if (typeof self.LoginUser != "object" || self.LoginUser == undefined) {
                    window.location = SysUrl.getUrl("/Account/Login?ReturnUrl=" + window.location.pathname);
                }
                self.CurrentRequireLst = [];

                var navibar = new NavibarCtl(self.LoginUser);
                navibar.buildNavibar(function (data) {
                    if (data.EXPIRED + data.CANCELED == 0) {
                        self.tempPanel.css("display", "block");
                    }
                    else {
                        self.LeftPanel.css("display", "block");
                        self.RightPanel.css("display", "block");
                    }
                    self.NavibarLoaded = true;
                    //改变主菜单active状态
                    $('.TotalOverTime').first().closest('dd').addClass('active');
                });
            },
            setCurrent: function () {
                var self = this;
                //Set right panel value
                self.lbPunishCount.text(self.CurrentRequire.PUSHCOUNT);
                self.lbOfferCount.text(self.CurrentRequire.OFFERCOUNT);
                self.lbStartTime.text(self.CurrentRequire.STARTTIME);
                self.lbSeries.text(self.CurrentRequire.SERIES + "/" + self.CurrentRequire.MATERIAL + "/" + self.CurrentRequire.SURFACE);
                self.lbDetail.text(self.CurrentRequire.DETAIL + "\u00a0\u00a0 " + "   交货地点:" + self.CurrentRequire.DELIVERY);
                self.bindRightEvents();
            },
            queryOverTime: function () {
                var self = this;
                self.OverTimeModel.setter(self.LoginUser.DDUserId, "B,D", "B", self.RequirePageNo, self.RequirePageSize);
                self.OverTimeModel.getMyGoods(function (rst) {

                    if (rst.isSuccess == true) {
                        if (rst.Data.DATAS.length > 0) {
                            //Set active record to the top.
                            if (self.IsFirstQuery == true) {
                                self.IsFirstQuery = false;
                                rst.Data.DATAS[0].ISACTIVE = 'active';
                                //Default Query firstly record.
                                self.CurrentRequire = rst.Data.DATAS[0];
                                self.CurrentRequireID = rst.Data.DATAS[0].REQUIREID;
                                self.setCurrent();
                            }
                            //build template
                            self.CurrentRequireLst = self.CurrentRequireLst.concat(rst.Data.DATAS);
                            self.TmplRequireMarkUp.tmpl(rst.Data.DATAS).appendTo(".vien-left");
                            self.bindLeftEvents();
                        }
                    }
                });
            },
            bindLeftEvents: function () {
                var self = this;

                //查询报价信息事件
                self.LeftPanel.find("li").unbind("click");
                self.LeftPanel.find("li").click(function () {
                    self.LeftPanel.find("li").removeClass("active");
                    $(this).addClass("active");
                    //Get Current
                    self.CurrentRequireID = $(this).attr("data-id");
                    for (var i = 0; i < self.CurrentRequireLst.length; i++) {
                        if (self.CurrentRequireLst[i].REQUIREID == self.CurrentRequireID) {
                            self.CurrentRequire = self.CurrentRequireLst[i];
                            break;
                        }
                    }
                    self.setCurrent();
                });

                var loading = false;
                $(self.LeftPanel).scroll(function () {
                    if (!loading && ($(self.LeftPanel).scrollTop() > self.LeftPanel.prop('scrollHeight') - self.LeftPanel.height() - 20)) {
                        loading = true;
                        //如果当前加载量 小于总数量 加载
                        self.TotalOverTime = parseInt($('.TotalOverTime').last().text());
                        if (self.TotalOverTime - self.CurrentRequireLst.length > 0) {
                            var html = '<li class="loadMore" style="text-align:center;'+
                            'position:absolute;bottom: 21px;width: 54.4%;z-index: 100;background: white;">信息加载中...</li>';
                            $(html).insertAfter(self.LeftPanel.find("li").last());
                            height = $('.loadMore').height();
                            $('.loadMore').fadeOut(1000, function () {
                                //查询报价信息事件
                                self.RequirePageNo += 1;
                                self.queryOverTime();
                                $(this).remove();
                            });
                        }
                    }
                });
            },
            bindRightEvents: function () {
                //评价
                var self = this;
                self.ConfirmQuotedBtn = $(".menu_btn.menu_btn_sub.btn-intention");
                self.ConfirmQuotedBtn.unbind("click");
                self.ConfirmQuotedBtn.on("click", function (event) {
                    self.newRequire(this);
                });
            },
            newRequire: function (element) {
                var self = this;
                window.open(SysUrl.getUrl("/DGoods/Deliver/Delivering?requireId=" + self.CurrentRequireID), '_self');
            }
        }
        return OverTimeCtl;
    });