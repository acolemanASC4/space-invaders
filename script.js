$('#startPop').hide();
$('#startPop').show(1000);
function fadeloop(el,timeout,timein,loop){
    var $el = $(el),intId,fn = function(){
         $el.fadeOut(timeout).fadeIn(timein);
    };
    fn();
    if(loop){
        intId = setInterval(fn,timeout+timein+100);
        return intId;
    }
    return false;
}

fadeloop('h1', 500, 500, true);