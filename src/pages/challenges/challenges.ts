import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PopoverController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { DetailPopoverPage } from '../popovers/detailpopover';

@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html'
  
})
export class ChallengesPage {
  challenges: string = "diet";
  items: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, db: AngularFireDatabase, public popoverCtrl: PopoverController) {
    this.items = db.list('/streaks');
  }

  showChallengePopover(item: Streak) {
    let popover = this.popoverCtrl.create(DetailPopoverPage, {"streak": item});
    popover.present({
    });
  }

}
