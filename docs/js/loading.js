// ローディング画面のdivを取得
var showloading = document.getElementById('showloading');
var contents = document.getElementById('contents');

var img = document.getElementById('loading-image');

window.addEventListener('load', function(){
    setTimeout('test()', 3000);
})

function test(){
    // img.style.width = '50vw';
    // img.style.left = '25vw';
    // img.style.top = '25vh';
    showloading.style.opacity='0';
    setTimeout('after()', 3000);
    contents.classList.remove('hidden');
}

function after(){
    showloading.style.display = 'none';
}


// var myMain = document.getElementById('background');
//     var rect = myMain.getBoundingClientRect();
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     var myTop = rect.top + scrollTop;
//     var color = 100;

// function background(){
//     //初期値を取得
//     color++;
//     myMain.style.backgroundColor='rgb(255, '+color+', 255)';
    
//     // //スクロールの値を取得
//     var y = window.pageYOffset ;
//     console.log(y);
//     // myMain.style.top=top+y/2+'vw';
// }

// background();
// setTimeout('background()', 6000);
