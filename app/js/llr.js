window.onload=function(){
var banspans=$(".llr-banner-imgbox>span");
var banlis=$(".llr-banner-li");
var text1=$(".llr-banner-wenzi p")
var a=0;
var b;
var c;
var t=setInterval(move,2000);
function move (){
     a++;
    if(a==3){
        a=0;
    }
    if(a>2){
        a=0;
    }
    b=a+1;
    c=a+2;
    if(b==3){
        b=0;
    }
    if(c==3){
        c=0;
    }
    if(c==4){
        c=1;
    }
    banspans.className="";
    banlis.css({"width":"0.12rem","border-radius":"50%"});
    banspans[a].className="llr-banner-span1";
    banspans[b].className="llr-banner-span2";
    banspans[c].className="llr-banner-span3";
    banlis.eq(a).css({"width":"0.22rem","border-radius":"0.2rem"});
}
// banner触摸
touch.on('.llr-banner-imgbox', 'touchstart', function(ev){
    ev.preventDefault();
    clearInterval(t);
});
touch.on('.llr-banner-imgbox', 'touchend', function(ev){
         t=setInterval(move,2000);
});
var imgbox = document.getElementsByClassName("llr-banner-imgbox");


touch.on(imgbox, 'swiperight', function(ev){
    movem();
});

touch.on(imgbox, 'swipeleft', function(ev){
    move();
});

function movem (){
    a--;
    if(a<0){
        a=2;
    }
    if(a>2){
        a=0;
    }
    b=a+1;
    c=a+2;
    if(b==3){
        b=0;
    }
    if(c==3){
        c=0;
    }
    if(c==4){
        c=1;
    }
    banspans.className="";
    banlis.css({"width":"0.12rem","border-radius":"50%"});
    banspans[a].className="llr-banner-span1";
    banspans[b].className="llr-banner-span2";
    banspans[c].className="llr-banner-span3";
    banlis.eq(a).css({"width":"0.22rem","border-radius":"0.2rem"});
}
}