function btnVid(button){
    let playerVid = document.getElementById('playerVid');
    let source = playerVid.querySelector('source');

    let videoSrc = button.getAttribute('video-src');

    source.src = videoSrc;

    playerVid.load();
    playerVid.play();

    console.log(videoSrc);

}


