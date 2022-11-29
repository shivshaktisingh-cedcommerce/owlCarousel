var player;
function onYouTubeIframeAPIReady() {
    console.log('onYouTubeIframeAPIReady')
    player = new YT.Player('player', {
        videoId: 'M7lc1UVf-VE',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    })
}

function onPlayerReady(event) {
    event.target.playVideo() // autostart
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // do other custom stuff here
      //setTimeout(stopVideo, 6000);
      //done = true;
    }
}

function stopVideo() {
    player.stopVideo()
}

function loadYouTubeVideo() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
var myModalEl = document.getElementById('dynamicVideoModal')
myModalEl.addEventListener('show.bs.modal', function (event) {
    loadYouTubeVideo()
})

var playBtn = document.getElementById('playBtn')
playBtn.addEventListener('click', function (event) {
    player.playVideo()
})

var pauseBtn = document.getElementById('pauseBtn')
pauseBtn.addEventListener('click', function (event) {
    player.pauseVideo()
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})