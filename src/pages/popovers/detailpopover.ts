import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import {NavParams} from 'ionic-angular';
import { GoogleAuth, FacebookAuth, Auth, User, UserSocialProviderDetailsData } from '@ionic/cloud-angular';
import { userDataStorageKey, testUserData, liftStreak, allStreaks } from '../../globals'

// This popover is used to input number of reps for the exercise

@Component({
  templateUrl: 'detailpopover.html' 
})
export class DetailPopoverPage {
  reps: number = 5;
  streak: Streak;
  constructor(public viewCtrl: ViewController, public params: NavParams, public user: User ) {
    this.streak = this.params.get('streak')

    // alert(JSON.stringify(this.streak));
  }

  close() {
    // alert(this.reps)
    // this.viewCtrl.dismiss(this.reps);
    // Construct a new user streak
    let newStreak: UserStreak = {
      streak: this.streak,
      status: StreakStatus.Active,
      cyclesCompleted: 0,
      numberCompletedThisWeek: 0,
      startDate: new Date(),
      reps: this.reps
    }


    alert("Updating user data");
    let currentData: UserData = this.user.get(userDataStorageKey, testUserData);
    currentData.streaks.push(newStreak);
    this.user.save().then(() => { alert("User Data saved to Ionic!")}).catch((err) => "Error: " + err);
  }
}