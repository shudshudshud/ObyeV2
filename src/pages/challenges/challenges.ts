import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html'
  
})
export class ChallengesPage {
  challenges: string = "diet";
  items: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('/streaks');
  }

}
