define(["jquery", 'jqueryui'], function ($, jqueryui) {
    $.fn.show = function (options) {
        var setting = $.extend({
            Caption: '', Title: '', Detail: '',
            Width: 0, onClose: null, onCancel: null, onConfirm: null
        }, options);

        //set content
        this.find(".model-caption").text(setting.Caption);
        this.find(".modal-title").text(setting.Title);
        this.find(".modal-detail").text(setting.Detail);
        if (setting.Width != 0) {
            this.find(".modal-content").css("width", setting.Width);
        }

        //Event
        var self = this;
        var close = self.find(".close");
        close.click(function () {
            closedialog(setting.onClose);
        });

        var cancel = self.find(".cancel");
        cancel.click(function () {
            closedialog(setting.onCancel);
        });

        var ignore = self.find(".cancel");
        cancel.click(function () {
            closedialog(setting.onCancel);
        });

        var confirm = self.find(".confirm");
        confirm.click(function () {
            closedialog(setting.onConfirm);
        });

        function closedialog(func) {
            self.css("display", "none");
            if (typeof func == 'function') {
                func.call(this);
            }
        }

        window.onclick = function (event) {
            if (event.target == self[0]) {
                closedialog(setting.onClose);
            }
        }
        this.find('.modal-content').draggable();
        self.css("display", "block");
    };

    $.fn.showpopu = function (options) {
        var PopuWindow = function () {
            this.setting = $.extend({
                Title: '',
                templateHtml: '',
                ConfirmTitle: '确定',
                CloseTitle: '取消',
                TimeOut: 1000 * 60,
                onClose: null, onConfirm: null
            }, options);
            this.init();
            this.setPosition();
            this.exOperation();
            this.closeWindow();
        };
        PopuWindow.prototype = {
            init: function () {
                var self = this;
                var html = "<div  class='NotifyPopu modalPopu'> " +
                    '<div class="modalPopu-content">' +
                    '<div class="popu-header">' + '<span class="popu-title">' + self.setting.Title + '</span>' +
                    '<span class="close">×</span>' +
                    '<p class="model-caption"></p></div>' +
                    '<div class="modal-body">' + self.setting.templateHtml +
                    '</div><div class="footer">' +
                    '<div class="btncancel" type="button">' +
                    '<a class="popu-btn-cancel">' + self.setting.CloseTitle + '</a>' +
                    '</div>' +
                    ' <div class="btnconfirm" type="button">' +
                    ' <a class="menu_btn_sub popu-btn-sub">' + self.setting.ConfirmTitle + '</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                $('#body').append(html);
                $('.NotifyPopu').css("display", "block");
            },
            setPosition: function () {

                var originalh = $('.NotifyPopu').height();
                var originalw = $('.NotifyPopu').width();
                $('.NotifyPopu').draggable(
                    {
                        start: function () {
                            $(this).css({ height: originalh, width: originalw });
                        },
                        stop: function () {
                            $(this).css({ height: originalh, width: originalw });
                        }
                    });
                $('.NotifyPopu').height(originalh);
                $('.NotifyPopu').width(originalw);

                var top, left;
                if (typeof $('.NotifyPopu').last().position() != 'undefined') {
                    top = $('.NotifyPopu').last().position().top;
                    left = $('.NotifyPopu').last().position().left;
                    top -= 35;
                    $($('.NotifyPopu').last()).offset({ top: top, left: left });
                }
            },
            exOperation: function () {
                var zindex = 0;
                $('.NotifyPopu').unbind('click');
                $('.NotifyPopu').click(function () {
                    if (zindex == 0)
                        zindex = $(this).zIndex() + 1;
                    var element = $(this);
                    $('.NotifyPopu').each(function (i, item) {
                        if (element[0] == $(item)[0]) {
                            $(item).zIndex(zindex);
                        }
                        else {
                            $(item).zIndex(zindex - 1);
                        }
                    });
                });
            },
            closeWindow: function () {
                var self = this;
                $(".btnconfirm").unbind("click");
                $(".btnconfirm").click(function () {
                    if (typeof self.setting.onConfirm == 'function') {
                        self.setting.onConfirm.call(this);
                    }
                    closepopu(this);
                });
                var close = $(".close");
                close.unbind('click');
                close.click(function () {
                    if (typeof self.setting.onClose == 'function') {
                        self.setting.onClose.call(this);
                    }
                    closepopu(this);
                });

                var cancel = $(".btncancel");
                cancel.unbind('click');
                cancel.click(function () {
                    if (typeof self.setting.onClose == 'function') {
                        self.setting.onClose.call(this);
                    }
                    closepopu(this);
                });

                var iscleantimeout = false;
                var vartime = setTimeout(function () {
                    closepopu($('div[class^="NotifyPopu"]')[0]);
                }, self.setting.TimeOut);

                $('.NotifyPopu').unbind("click");
                $('.NotifyPopu').click(function () {
                    try {
                        if (!iscleantimeout) {
                            clearTimeout(vartime);
                        }
                    } catch (e) { }
                    finally {
                        iscleantimeout = true;
                    }
                });

                function closepopu(element) {
                    var parentelement = $(element).closest('div[class^="NotifyPopu"]');
                    parentelement.remove();
                }
            }
        };
        new PopuWindow();
    }
});