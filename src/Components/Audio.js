export class IntroMusic {

    audio = new Audio(require('../assets/music/Kai_Engel_-_04_-_Moonlight_Reprise.ogg'));

    play = () => {
        this.audio.volume = 0.4;
        this.audio.play();
    }
}