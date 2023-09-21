"use strict";
class AudioPlayer {
    play() {
        console.log("Đang phát Audio");
    }
}
class VideoPlayer {
    play() {
        const video = document.querySelector("div");
        console.log("Đang phát Video");
    }
}
const audioPlayer_1 = new AudioPlayer();
audioPlayer_1.play();
