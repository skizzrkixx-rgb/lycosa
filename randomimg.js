// define your images here
var images = [
"randomimg/alc.jpg",
     "randomimg/beautifulsoul.jpg",
     "randomimg/digitalfootprint.jpg",
     "randomimg/evilandintimidating.jpg",
     "randomimg/godgrantme.jpg",
     "randomimg/map.jpg",
     "randomimg/minesweeperhell.jpg",
     "randomimg/situation.jpg",
     "randomimg/webfunny.jpg"
];

// this chooses a random number from all available image indices
var randomImage = images[Math.floor(Math.random() * images.length)];
console.log(randomImage);
// make the URL into a proper image tag
var image = "<img src='" + randomImage + "'>";
// append to the div
document.getElementById("mypicture").innerHTML = image;
