import { Component } from '@angular/core';
import songs from '../../DB/songs.json'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private songlist: Array<object> = songs
  public selectedSong: object = {}

  constructor() {
    console.log(this.songlist)
    console.log(this.selectedSong)
  }

  public randomSong() {
    const random = this.getRandomInt(0, this.songlist.length)
    this.selectedSong = this.songlist[random]
    console.log(this.selectedSong)
  }

  private getRandomInt(min: number = 0, max: number = 5) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
