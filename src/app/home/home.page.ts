import { Component } from '@angular/core'
import { ToastController } from '@ionic/angular'
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
  public peopleControl: boolean
  private peopleList: Array<object> = people
  public testChange: any

  constructor(private toastController: ToastController) {
    // console.log(this.peopleList)
    // console.log(this.peopleSelected)
    // this.selectedSong['status'] = true
  }

  async presentToast(message: string = 'Your settings have been saved.') {
    const toast = await this.toastController.create({ message, duration: 2000 })
    toast.present()
  }

  public randomSong() {
    this.confirmedSong = {}
    const random = this.getRandomInt(0, this.songlist.length)
    this.selectedSong = this.songlist[random]
    console.log(this.selectedSong)
  }

  private getRandomInt(min: number = 0, max: number = 5) {
    return Math.floor(Math.random() * (max - min)) + min
  }

  public confirmSong() {
    this.confirmedSong = this.selectedSong
    this.selectedSong = {}
  }

  public addPeople() {
    // this.peopleSelected = this.peopleList
    this.peopleControl = true
    console.log(this.peopleList)
  }

  public changePeople(e, id: number) {
    console.log(this.peopleList)
    let countPeople = 0
    this.peopleList.map(el => {
      if (el['Dance']) {
        countPeople++
      }
    })
    console.log(countPeople)
    if (countPeople > 6) {
      this.peopleList.map(el => {
        if (el['ID'] === id) {
          el['Dance'] = false
        }
      })
      this.presentToast('Deben haber solo 6 personas máximo')
    }

  }

  public confirmPeople() {
    this.peopleList.map(el => {
      el['Dance'] = false
    })
  }

}
