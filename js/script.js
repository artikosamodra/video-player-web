let vDesc = {
    'btnV1': "BEACH. This Text Descript Area",
    'btnV2': "FOREST. This Text Descript Area",
    'btnV3': "HARBOUR. This Text Descript Area",
    'btnV4': "SEA. This Text Descript Area",
    'btnV5': "TOWN. This Text Descript Area"
  }; 



function btnVid(button){
    let playerVid = document.getElementById('playerVid');
    let textDesc = document.getElementById('textDesc');

    //Selector to PlayerVid.source
    let source = playerVid.querySelector('source');


    //get attribute video-src from button.
    let videoSrc = button.getAttribute('video-src');
    let textSrc = button.getAttribute('id');

    //add or change source.src value >> video-src value at videoSrc >
    source.src = videoSrc;
    textDesc.textContent = vDesc[textSrc];

    playerVid.load();
    playerVid.play();

    console.log(videoSrc);

}
