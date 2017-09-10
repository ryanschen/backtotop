define(['jquery', 'scrollto'], function($, ScrollTo){
    function BackTop(el, opts){
        this.opts = $.extend({}, BackTop.DEFAULTS, opts);
        this.$el = $(el);
        this.scroll = new ScrollTo({
            desp: 0,
            speed: this.opts.speed
        });
        this._checkPosition();
        this.$el.on('click', $.proxy(this._move, this));
        $(window).on('scroll', $.proxy(this._checkPosition, this));
    }

    BackTop.DEFAULTS = {
        //mode: 'move',
        pos: $(window).height(),
        speed: 800
    };

    BackTop.prototype._move = function(){
        this.scroll.move();
    }

    BackTop.prototype._checkPosition = function(){
        var $el = this.$el;
        if($(window).scrollTop() > this.opts.pos){
            $el.fadeIn();
        }else{
            $el.fadeOut();
        }
    }

    $.fn.extend({
       backtop: function(opts){
          return this.each(function(){
               new BackTop(this, opts)
           });
       }
    });

    return BackTop;
});