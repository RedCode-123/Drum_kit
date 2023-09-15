"use strict";
let imagesPath = "./images/";
let soundPath = "./sounds/"
let images = [
  `${imagesPath}tom1.png`,
  `${imagesPath}tom2.png`,
  `${imagesPath}tom3.png`,
  `${imagesPath}tom4.png`,
  `${imagesPath}snare.png`,
  `${imagesPath}crash.png`,
  `${imagesPath}kick.png`];

let music = [
  `${soundPath}tom-1.mp3`,
  `${soundPath}tom-2.mp3`,
  `${soundPath}tom-3.mp3`,
  `${soundPath}tom-4.mp3`,
  `${soundPath}snare.mp3`,
  `${soundPath}crash.mp3`,
  `${soundPath}kick-bass.mp3`];

let letters = ["w", "a", "s", "d", "j", "k", "l"];

let buttons = document.querySelectorAll(".drum");

class Instrument {
  constructor({
    image,
    music,
    letter,
    button,
  }) {
    this.image = image;
    this.music = music;
    this.letter = letter;
    this.button = button;
    this.button.style.backgroundImage = this.image;
    this.button.addEventListener("click", () => {
      this.playIt();
      this.animateIt();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === this.letter) {
        this.playIt()
        this.animateIt();
      }

    });
  }
  playIt() {
    let theAudio = new Audio(this.music);
    theAudio.play();
  }
  animateIt() {
    this.button.classList.add("pressed");
    setTimeout(() => this.button.classList.remove("pressed"), 250);
  }

}

let instruments = [];

buttons.forEach((button, idx) => {
  instruments.push(
    new Instrument({
      image: `url('${images[idx]}')`,
      music: music[idx],
      letter: letters[idx],
      button: button
    })
  )
})

