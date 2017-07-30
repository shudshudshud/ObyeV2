import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { HomeExercisePage } from '../homeexercise/homeexercise';
import { HomeDietPage } from '../homediet/homediet';
import { ChallengesPage } from '../challenges/challenges';
import { StartingPopoverPage } from '../popovers/startingpopover';
/*
import { ExercisePopoverPage } from './exercisepopover';
import { DietPopoverPage } from './dietpopover';
*/
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { GoogleAuth, FacebookAuth, Auth, User, UserSocialProviderDetailsData } from '@ionic/cloud-angular';
import { userDataStorageKey, testUserData, liftStreak, allStreaks } from '../../globals'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: UserStreak[];
  userData: UserData;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, db: AngularFireDatabase, public user: User, public loadingCtrl: LoadingController) {
    //this.items = db.list('/streaks');


    let loading = this.loadingCtrl.create({
      content: 'Loading your streaks...'
    });

    loading.present();

    this.readUserData();

    this.items = this.userData.streaks;

    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


  goToHomeExercise() {
    let exerciseUserStreaks: UserStreak[] = this.items.filter(function(item) {
      return item.streak.type.maintype == StreakType.Exercise;
    });
    this.navCtrl.push(HomeExercisePage, {"params": exerciseUserStreaks}); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }
  
  goToHomeDiet() {
    let dietUserStreaks: UserStreak[] = this.items.filter(function(item) {
      return item.streak.type.maintype == StreakType.Diet;
    });
    this.navCtrl.push(HomeDietPage, {"params": dietUserStreaks}); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }
  
  goToChallengesPage(myEvent) {
    this.navCtrl.parent.select(2);

    /*
    let popover = this.popoverCtrl.create(StartingPopoverPage);
    popover.present({
      ev: myEvent
    });
    */
  }
  /*
  presentDietPopover(myEvent) {
    let popover = this.popoverCtrl.create(DietPopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  */

  handleAccept(item: UserStreak) {
    console.log("Got item");
    console.log(item)

    if (item.numberCompletedThisWeek == -1) {
      // This is a daily streak. Just increase the number of cycles completed
      // But only if we have more cycles to complete
      console.log("Logic running for daily cycle");
      // Increase number of cycles done
      if (item.cyclesCompleted < item.streak.frequencyInfo.cyclesToComplete) {
        item.cyclesCompleted += 1;
        console.log("Increased cycles completed to: " + item.cyclesCompleted);
      }

      if (item.cyclesCompleted >= item.streak.frequencyInfo.cyclesToComplete) {
        // The current streak is completed
        item.status = StreakStatus.Succeeded;
        console.log("Streak success!");
      }
    } else {
      // This is a weekly cycle. Increment the number of cycles for this week
      alert("Weekly cycle logic not implemented")
    }

    this.updateUserData();
  }

  /**
   * Reads all of the user's data from Ionic Auth
   */
  readUserData() {
    // Gets the user data from the server (if any existing data is present)
    this.userData = this.user.get(userDataStorageKey, null);


    if (this.userData != null) {
      for (let userStreak of this.userData.streaks) {
        // alert("User Streak name: " + userStreak.streak.goalDescription);
      }
    } else {
      alert("No user data found.");
      this.userData = testUserData;
      }
  }

  updateUserData() {

      alert("Updating user data");
    this.user.set(userDataStorageKey, this.userData);
    this.user.save().then(() => { alert("User Data saved to Ionic!")}).catch((err) => "Error: " + err);
  }
}


