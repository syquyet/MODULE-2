interface Playable {
  play(): void;
}
class AudioPlayer implements Playable {
  play(): void {
    console.log("Đang phát Audio");
  }
}
class VideoPlayer implements Playable {
  play(): void {
    const video=document.querySelector("div")
    
    console.log("Đang phát Video");
  }
}
const audioPlayer_1 = new AudioPlayer();
audioPlayer_1.play();
