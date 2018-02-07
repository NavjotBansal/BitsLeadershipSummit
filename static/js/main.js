document.querySelector(".firstwrapper").style.width=window.innerWidth;
var marleft=0;
var name=0;
window.onload = function() {
    var ly;
    var en=document.querySelector(".nav");        
    for (ly=0;
        en != null;
        ly+= en.offsetTop, en = en.offsetParent);
    name = ly;
}
window.onscroll = function (e) {
    if(window.scrollY>name)
    {   document.querySelector("#navbar").className="nav active";
    }
    else
    {   document.querySelector("#navbar").className="nav inactive";
    }
};
new WOW().init();

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}
(function() // Code in a function to create an isolate scope
{
var speed = 500;
var moving_frequency = 15; // Affects performance !
var links = document.getElementsByTagName('a');
var href;
for(var i=0; i<links.length; i++)
{   
    href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
    if(href !== null && href.length > 1 && href.substr(0, 1) == '#')
    {
        links[i].onclick = function()
        {
            var element;
            var href = this.attributes.href.nodeValue.toString();
            if(element = document.getElementById(href.substr(1)))
            {
                var hop_count = speed/moving_frequency
                var getScrollTopDocumentAtBegin = getScrollTopDocument();
                var gap = (getScrollTopElement(element) - getScrollTopDocumentAtBegin) / hop_count;

                for(var i = 1; i <= hop_count; i++)
                {
                    (function()
                    {
                        var hop_top_position = gap*i;
                        setTimeout(function(){  window.scrollTo(0,hop_top_position + getScrollTopDocumentAtBegin); }, moving_frequency*i);
                    })();
                }
            }

            return false;
        };
    }
}

var getScrollTopElement =  function (e)
{
    var top = 0;

    while (e.offsetParent != undefined && e.offsetParent != null)
    {
        top += e.offsetTop + (e.clientTop != null ? e.clientTop : 0);
        e = e.offsetParent;
    }

    return top;
};

var getScrollTopDocument = function()
{
    return document.documentElement.scrollTop + document.body.scrollTop+20;
};
})();
document.querySelector("#seemore").onclick=function()
{
    document.querySelector("body").style.overflowY="auto";
}

// distance from top
$(window).on('scroll', function () {
    var scrollTop     = $(window).scrollTop(),
        elementOffseta = $('.about').offset().top,
        // elementOffsetc = $('.sponsors').offset().top,
        elementOffsetb = $('.speakers').offset().top,
        elementOffsetc = $('.contact').offset().top,        
        distancea      = (elementOffseta - scrollTop-10);
        distanceb      = (elementOffsetb - scrollTop-10);
        distancec      = (elementOffsetc - scrollTop-10);
        // distanced      = (elementOffsetd - scrollTop-10);
        if(distancea>0)
        {
            $(".nav ul li:nth-child(2) a ").css("color","#b6b8ba");

        }
        else if(distancea<=0 && distanceb>5 && distancec>0 )
        {
            $(".nav ul li:nth-child(2) a ").css("color","#2791cf");
            $(".nav ul li:nth-child(3) a ").css("color","#b6b8ba");
            document.querySelector("#p1").className="normal";
        }
        else if(distanceb<=4 && distancec>5)
        {
            $(".nav ul li:nth-child(3) a").css("color","#2791cf");
            $(".nav ul li:nth-child(2) a").css("color","#b6b8ba");
            $(".nav ul li:nth-child(4) a").css("color","#b6b8ba");
            document.querySelector("#p1").className="slide";
            document.querySelector("#p2").className="normal";
        }
        else if(distancec<=4)
        {
            $(".nav ul li:nth-child(4) a").css("color","#2791cf");
            $(".nav ul li:nth-child(3) a").css("color","#b6b8ba");
            $(".nav ul li:nth-child(5) a").css("color","#b6b8ba");
            document.querySelector("#p1").className="slide";
            document.querySelector("#p2").className="slide";
            document.querySelector("#p3").className="normal";
        }
});