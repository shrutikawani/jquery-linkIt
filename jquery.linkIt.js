/*
 * name:   LinkIt
 * author:  Shrutikawani
 * version: 0.1.0
 * license: MIT
 */

$(function($){
    $.fn.linkIt = function(options){
        // don't use $(this).html();
        // in the plugin, just use standard 'this' keyword
        //alert(this.html());
        
        // Default settings
        var settings = $.extend({
            href: null,
            text: null,
            target: "_self"
        }, options);
        
       // validate
        if(settings.href == null) {
            console.log("You need an href option for LinkIt to work.")
            return this;
        }
        
        return this.each(function(){
            var obj = $(this);
            
            if(settings.text == null){
                settings.text = obj.text();
                //console.log(obj.text());
            }
            
            obj.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>' ).text(settings.text);
        });
        
        
    }
}(jQuery));
