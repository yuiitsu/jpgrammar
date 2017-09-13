/**
 * 设置大小
 */
var Common = {
    sizeHtml: function() {
        var size = $(window).width() / 16;
        size = size > 60 ? 60 : size;
        $('html').css('font-size', size + 'px');
    },

    init: function() {
        var self = this;
        this.sizeHtml();
        $(window).resize(function() {
            self.sizeHtml();
        });
    }
};

Common.init();
