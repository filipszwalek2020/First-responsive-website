function Circles(n,x)
{
var kola='';                                                       
switch(n)
{ 
    case 1:kola=kola+'<i class="demo-icon icon-circle"></i>'+'<i class="demo-icon icon-circle-empty"></i><i class="demo-icon icon-circle-empty"></i><i class="demo-icon icon-circle-empty"></i><i class="demo-icon icon-circle-empty"></i>';break;       
    case 2:kola=kola+'<i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i>'+'<i class="demo-icon icon-circle-empty"></i><i class="demo-icon icon-circle-empty"></i><i class="demo-icon icon-circle-empty"></i>';break;
    case 3:kola=kola+'<i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i>'+'<i class="demo-icon icon-circle-empty"></i><i class="demo-icon icon-circle-empty"></i>';break;  
    case 4:kola=kola+'<i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i>'+'<i class="demo-icon icon-circle-empty"></i>';break;  
    case 5:kola=kola+'<i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i><i class="demo-icon icon-circle"></i>';break;           
    case 6:kola=kola+'Praktyka: 100% <br> Teoria: 75%';break;  
    case 7:kola=kola+'Praktyka: 100% <br> Teoria: 93%';break;          
    default:kola='';                                
}                                                                                           
document.getElementById("kola"+x).innerHTML=kola;   
}

