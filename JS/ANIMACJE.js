$(document).ready(function() 
{
$('.overlayT').toggleClass('onload');   
setTimeout(function(){     
    $('.overlayT').toggleClass('onload');    
    },600);    
});

function scale_plus(n)
{
    $("#k"+n).find("#k"+n).animate({transform: "scale(1)"}, 5000, 'linear');
    $("#k"+n).find('.link').css({opacity:0.90});
    $("#k"+n).find('.overlayT').toggleClass('animate');
    setTimeout(function()
    {     
    $("#k"+n).find('h2').animate({opacity: "1"}, 500, 'linear');     
    },800);  
    
};     
    
function scale_minus(n)
{
    $("#k"+n).find("#k"+n).animate({transform: "scale(1)"}, 5000, 'linear');
    $("#k"+n).find('.overlayT').toggleClass('animate');
    $("#k"+n).find('.link').css({opacity:0});
    $("#k"+n).find('h2').removeClass('opis_next');
    setTimeout(function()
    {     
    $("#k"+n).find('h2').animate({opacity: "0"}, 300, 'linear');     
    },200);  
};     
    
    


 
window.addEventListener('scroll',function(){
var value = window.scrollY;
$('figure').css({top:(value*(0.3)+'px')});
$('footer').css({top:(value*(0.4)+'px')})});
