import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-homediet',
  templateUrl: 'homediet.html'
})
export class HomeDietPage {

  items: UserStreak[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = navParams.get("params");

    //alert(JSON.stringify(this.items));
  }

}
