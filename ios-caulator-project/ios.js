
var eq =0.1+0.2;
var e= eq.toFixed(1 );
console.log(e)
function nega(){
    var num1 = document.getElementById('nega');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    
    result.innerText +='-';
    hi();

}
function pecent(){
    var num1 = document.getElementById('pecent');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent +=num1Content;
}
function ac(){
    var num1 = document.getElementById('ac');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent ="";
    var elhi = document.  getElementById('hi');
    elhi.innerText= '';
    
}

function x(){
    var num1 = document.getElementById('btx');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    var elhi = document.  getElementById('hi');
    elhi.innerText+= '*';
    var result = document.getElementById('result');
    result.innerText='';
    
}

function minus(){
    var num1 = document.getElementById('btmi');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    var elhi = document.  getElementById('hi');
    elhi.innerText+= '-';
    var result = document.getElementById('result');
    result.innerText='';
    
}

function plus(){
    var num1 = document.getElementById('btpl');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');

    var elhi = document.  getElementById('hi');
    elhi.innerText+= '+';
    var result = document.getElementById('result');
    result.innerText='';
    
}

function equal(){
    var result = document.getElementById('result','bt');
    
    
    var elhi = document.  getElementById('hi');
   var hire= elhi.innerText;
   var hia =eval(hire);
   elhi.innerText=hia;
   result.innerText= hia;
   eq =1;

}

function bt7(){
    console.log(eq);
    var num1 = document.getElementById('bt7');
    var num1Content = num1.textContent;
   
    
    result.textContent += num1Content;
    
    var elhi = document.  getElementById('hi');
    elhi.innerText +=7;
   
    


}

function bt8(){
    var num1 = document.getElementById('bt8');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
   var re=result.innerText;
   var le =re.length;
   if(le==1){
    result.textContent += num1Content;
   }
    
    var elhi = document.  getElementById('hi');
    elhi.innerText +=8;


}

function bt9(){
    var num1 = document.getElementById('bt9');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=9;
}

function bt4(){
    var num1 = document.getElementById('bt4');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=4;
}

function bt5(){
    var num1 = document.getElementById('bt5');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=5;
}

function bt6(){
    var num1 = document.getElementById('bt6');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=6;
}

function bt2(){
    var num1 = document.getElementById('bt2');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=2;
}
function bt1(){
    var num1 = document.getElementById('bt1');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=1;
}
function bt3(){
    var num1 = document.getElementById('bt3');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=3;
}

function bto(){
    var num1 = document.getElementById('bto');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += num1Content;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=0;
}

function btd(){
    var num1 = document.getElementById('bt');
    var num1Content = num1.textContent;
    var result = document.getElementById('result','bt');
    result.textContent += '.';
    var elhi = document.  getElementById('hi');
    elhi.innerText +='.';
}

function backslash(){
    var num1 = document.getElementById('btsl');
    var num1Content = num1.textContent;
    var elhi = document.  getElementById('hi');
    elhi.innerText+= '/';
    var result = document.getElementById('result');
    result.innerText='';
    
}
 
function hi(){
    
    var result = document.getElementById('result');
    var dd = result.textContent;
    var elhi = document.  getElementById('hi');
    elhi.innerText+=dd;

}

function hii(){
    
    var result = document.getElementById('result');
    var dd = result.textContent;
    var elhi = document.  getElementById('hi');
    elhi.innerText +=dd += '/';

}