import { Component } from '@angular/core';
import songs from '../../DB/songs.json'
import people from '../../DB/people.json'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private songlist: Array<object> = songs
  public selectedSong: object = {}
  public confirmedSong: object = songs[0]
  public peopleList: Array<object> = people
  public peopleSelected: Array<object> = []

  constructor() {
    console.log(this.peopleList)
    console.log(this.peopleSelected)
    // this.selectedSong['status'] = true
  }

  public randomSong() {
    this.confirmedSong = {}
    const random = this.getRandomInt(0, this.songlist.length)
    this.selectedSong = this.songlist[random]
    console.log(this.selectedSong)
  }

  private getRandomInt(min: number = 0, max: number = 5) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public confirmSong() {
    this.confirmedSong = this.selectedSong
    this.selectedSong = {}
  }

}
