window.onload = choosePic;

var myPix = new Array(
"randomimg/alc.jpg",
     "randomimg/beautifulsoul.jpg",
     "randomimg/digitalfootprint.jpg",
     "randomimg/evilandintimidating.jpg",
     "randomimg/godgrantme.jpg",
     "randomimg/map.jpg",
     "randomimg/minesweeperhell.jpg",
     "randomimg/situation.jpg",
     "randomimg/webfunny.jpg"
);

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
     setInterval(choosePic, 86400000); //- set time 2 generate (1 sec = 1000) (86400000 seconds = day)
}

 // 
