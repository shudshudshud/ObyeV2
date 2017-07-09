import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html'
})
export class ChallengesPage {

  items: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase) {
    this.items = db.list('/streaks');
  }

}
