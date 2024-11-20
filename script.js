script.js

// 画像切り替え
var isSarvAlt = false;
function toggleImage() {
    var sarvImg = document.getElementById("sarvImg");
    if (isSarvAlt) {
        sarvImg.src = "sarv.jpg";
    } else {
        sarvImg.src = "sarv_alt.jpg";
    }
    isSarvAlt = !isSarvAlt;
}

// 動画切り替え
var currentVideo = 0;
function showNextVideo() {
    var videos = [
        document.getElementById('video-frame-0'),
        document.getElementById('video-frame-1'),
        document.getElementById('video-frame-2')
    ];
    videos[currentVideo].style.display = 'none';
    currentVideo = (currentVideo + 1) % videos.length;
    videos[currentVideo].style.display = 'block';
}

// キーボードイベントリスナー
document.addEventListener('keydown', function(event) {
    var arrowKeys = {
        'ArrowLeft': 'left-arrow',
        'ArrowDown': 'down-arrow',
        'ArrowUp': 'up-arrow',
        'ArrowRight': 'right-arrow'
    };
    var elementId = arrowKeys[event.key];
    if (elementId) {
        document.getElementById(elementId).classList.add('active');
    }
});

document.addEventListener('keyup', function(event) {
    var arrowKeys = {
        'ArrowLeft': 'left-arrow',
        'ArrowDown': 'down-arrow',
        'ArrowUp': 'up-arrow',
        'ArrowRight': 'right-arrow'
    };
    var elementId = arrowKeys[event.key];
    if (elementId) {
        document.getElementById(elementId).classList.remove('active');
    }
});

// トップへ移動するボタン
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.addEventListener('scroll', function() {
    var topButton = document.getElementById('topButton');
    if (window.pageYOffset > 300) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
});
