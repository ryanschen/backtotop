define(['jquery'], function($){

    function ScrollTo(opts){
        this.opts = $.extend({}, ScrollTo.DEFAULT_OPS, opts);
        this.$el = $('html body');
    }

    ScrollTo.prototype.move = function(){
        var opts = this.opts;
        if($(window).scrollTop() != opts.dest && !this.$el.is(':animated')){
            this.$el.animate({
               scrollTop: opts.dest
            }, opts.speed);
        }
    }

    ScrollTo.DEFAULT_OPS = {
        dest: 0,
        speed: 800
    };

    return ScrollTo;
});