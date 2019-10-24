import { Component } from '@angular/core';
import songs from '../../DB/songs.json'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log(songs)
  }

  randomSong() {
    const random = this.getRandomInt(0, songs.length)
    console.log(songs[random])
  }

  getRandomInt(min: number = 0, max: number = 5) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
