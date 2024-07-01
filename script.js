var submitButton=document.getElementById("bt")
var Than=document.querySelector('.main2')
var mai=document.querySelector('.main')
var one=document.querySelector('.one')
var two=document.querySelector('.two')
var three=document.querySelector('.three')
var four=document.querySelector('.four')
var five=document.querySelector('.five')
var res=document.querySelector('.ans')


submitButton.addEventListener("click",function(){
    Than.style.display="block"
    mai.style.display="none"
  })


function get1(){
    res.innerHTML="1";
    one.style.backgroundColor="lightblue"
    two.style.backgroundColor="hsl(218, 10%, 23%)"
    three.style.backgroundColor="hsl(218, 10%, 23%)"
    four.style.backgroundColor="hsl(218, 10%, 23%)"
    five.style.backgroundColor="hsl(218, 10%, 23%)"
}
function get2(){
    res.innerHTML="2"
    two.style.backgroundColor="lightblue"
    one.style.backgroundColor="hsl(218, 10%, 23%)"
    three.style.backgroundColor="hsl(218, 10%, 23%)"
    four.style.backgroundColor="hsl(218, 10%, 23%)"
    five.style.backgroundColor="hsl(218, 10%, 23%)"
}
function get3(){
    res.innerHTML="3"
    three.style.backgroundColor="lightblue"
    one.style.backgroundColor="hsl(218, 10%, 23%)"
    two.style.backgroundColor="hsl(218, 10%, 23%)"
    four.style.backgroundColor="hsl(218, 10%, 23%)"
    five.style.backgroundColor="hsl(218, 10%, 23%)"

}
function get4(){
    res.innerHTML="4"
    four.style.backgroundColor="lightblue"
    one.style.backgroundColor="hsl(218, 10%, 23%)"
    two.style.backgroundColor="hsl(218, 10%, 23%)"
    three.style.backgroundColor="hsl(218, 10%, 23%)"
    five.style.backgroundColor="hsl(218, 10%, 23%)"
}
function get5(){
    res.innerHTML="5"
    five.style.backgroundColor="lightblue"
    one.style.backgroundColor="hsl(218, 10%, 23%)"
    two.style.backgroundColor="hsl(218, 10%, 23%)"
    three.style.backgroundColor="hsl(218, 10%, 23%)"
    four.style.backgroundColor="hsl(218, 10%, 23%)"
}
