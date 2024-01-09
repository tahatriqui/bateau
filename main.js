let stars = document.getElementById("stars");

let moon = document.getElementById("moon");

let mountains3 = document.getElementById("mountains3");

let mountains4 = document.getElementById("mountains4");

let river = document.getElementById("river");

let boat = document.getElementById("boat");

let news = document.querySelector(".new");

window.onscroll = function(){
    let value = scrollY;
    stars.style.left =value+'px';
    moon.style.top =value*4+'px';
    mountains3.style.top =value*2+'px';
    mountains4.style.top=value*1.5+'px';
    river.style.top=value+'px';
    boat.style.top=value+'px';
    boat.style.left = value*3 +'px';
    news.style.fontSize = value +'px';
    if(scrollY >= 64){
        news.style.fontSize = '64' +'px';
        news.style.position='fixed'
        if(scrollY >= 416){
            news.style.display="none"
        }else{
            news.style.display="block"
        }
        if(scrollY >=86){
            document.querySelector('.main').style.background = 'linear-gradient(#0c6ea7,rgb(144, 180, 222))'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#8004a5,rgb(36, 1, 62))'
        }
    }
}