import { Player } from "./player.js";
import { Level } from "./level.js";
import { keyEventToDirection } from "./constants.js";
import { SPACE_KEY_FROM_EVENT } from "./constants.js";
import { Portal } from "./portal.js";
import { ExitScreen } from "./exit-screen.js";
import { SplashScreen } from "./splash-screen.js";
import soundtrackAudio from "url:../../assets/soundtrack.mp3";
import armBombAudio from "url:../../assets/arm-bomb.mp3";
import explosionAudio from "url:../../assets/explosion.mp3";
import exitAudio from "url:../../assets/exit.mp3";

export class Game {
  #level = new Level();
  #player = new Player();
  #portal = new Portal();
  #exitScreen = new ExitScreen();
  #splashScreen = new SplashScreen();
  #handleKeydown = (event) => undefined;
  #inGamePlay = false;
  #audio = {
    game: {
      audioElement: document.createElement("audio"),
      sourceElement: document.createElement("source"),
    },
    bomb: {
      audioElement: document.createElement("audio"),
      sourceElement: document.createElement("source"),
    },
    explosion: {
      audioElement: document.createElement("audio"),
      sourceElement: document.createElement("source"),
    },
    exit: {
      audioElement: document.createElement("audio"),
      sourceElement: document.createElement("source"),
    },
  };

  init() {
    this.#addKeyListener();
    this.#splashScreen.render();
    this.#startSoundEffect();
  }

  #start() {
    this.#level.render();
    this.#player.render();
    this.#portal.render();

    this.#audio.game.audioElement.play();
    this.#level.onBombExplode = () => {
      this.#audio.explosion.audioElement.currentTime = 0;
      this.#audio.explosion.audioElement.play().catch(() => {});
    };
  }

  #startSoundEffect() {
    const rootElement = document.getElementById("root");

    this.#audio.game.sourceElement.src = soundtrackAudio;
    this.#audio.game.sourceElement.type = "audio/mpeg";

    this.#audio.game.audioElement.loop = true;
    this.#audio.game.audioElement.autoplay = true;

    this.#audio.game.audioElement.appendChild(this.#audio.game.sourceElement);

    this.#audio.bomb.sourceElement.src = armBombAudio;
    this.#audio.bomb.sourceElement.type = "audio/mpeg";
    this.#audio.bomb.audioElement.appendChild(this.#audio.bomb.sourceElement);

    this.#audio.exit.sourceElement.src = exitAudio;
    this.#audio.exit.sourceElement.type = "audio/mpeg";
    this.#audio.exit.audioElement.appendChild(this.#audio.exit.sourceElement);

    this.#audio.explosion.sourceElement.src = explosionAudio;
    this.#audio.explosion.sourceElement.type = "audio/mpeg";
    this.#audio.explosion.audioElement.appendChild(
      this.#audio.explosion.sourceElement
    );

    rootElement.appendChild(this.#audio.game.audioElement);
    rootElement.appendChild(this.#audio.bomb.audioElement);
    rootElement.appendChild(this.#audio.explosion.audioElement);
    rootElement.appendChild(this.#audio.exit.audioElement);
  }

  #addKeyListener() {
    this.#handleKeydown = (event) => {
      if (this.#inGamePlay === false) {
        this.#start();
        this.#splashScreen.destroy();
        this.#inGamePlay = true;
        return;
      }

      if (event.key === SPACE_KEY_FROM_EVENT) {
        this.#level.armBomb(this.#player.x, this.#player.y);
        this.#audio.bomb.audioElement.play();
        return;
      }

      const direction = keyEventToDirection[event.key];

      if (!direction) {
        return;
      }

      const canMove = this.#level.canMove(
        direction,
        this.#player.x,
        this.#player.y
      );

      this.#player.move(direction, canMove);

      if (
        this.#player.x === this.#portal.x &&
        this.#player.y === this.#portal.y
      ) {
        this.#exitGame();
      }
    };

    document.addEventListener("keydown", this.#handleKeydown);
  }

  #removeKeyListener() {
    document.removeEventListener("keydown", this.#handleKeydown);
  }

  #exitGame() {
    this.#removeKeyListener();
    this.#level.destroy();
    this.#player.destroy();
    this.#portal.destroy();
    this.#exitScreen.render();

    this.#audio.game.audioElement.pause();
    this.#audio.game.audioElement.currentTime = 0;
    this.#audio.exit.audioElement.currentTime = 0;
    this.#audio.exit.audioElement.play().catch(() => {});
  }
}
