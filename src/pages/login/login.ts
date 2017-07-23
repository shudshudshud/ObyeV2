import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAuth, FacebookAuth, Auth, User, UserSocialProviderDetailsData } from '@ionic/cloud-angular';
import { TabsPage } from '../tabs/tabs';
import { userDataStorageKey, testUserData, liftStreak, allStreaks } from '../../globals'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
   <ion-grid text-center>
    <ion-row justify-content-center> 
    <ion-col col-auto>
      <button ion-button class="button-block" icon-left color="danger" (click)="loginGoogle()">
        <ion-icon name="logo-googleplus"></ion-icon>
        Log in with Google!
      </button>
      <button ion-button class="button-block" icon-left (click)="loginFacebook()">
        <ion-icon name="logo-facebook"></ion-icon>
        Log in with Facebook!
      </button>
     <button ion-button class="button-block" color="dark" (click)="goToMainPage()">
      Bypass login (Developers)
     </button>
     <button ion-button class="button-block" color="dark" (click)="populateDatabase()">
      Populate DB 
     </button>
    </ion-col>
    </ion-row>
  </ion-grid>
  </ion-content>
`
})
export class LoginPage {
  //streakOne: Streak = {"uid": "1234", "title": "Run 15 min a day!", "daysCompleted": 10, "daysTotal": 10}
  //defaultUserData: UserData = { "streaks": [this.streakOne]}

  constructor(public googleAuth: GoogleAuth, public facebookAuth: FacebookAuth, public auth: Auth, public user: User, public navCtrl: NavController, public db: AngularFireDatabase) {


  }

  loginGoogle() {
    console.log("Beginning Google Login");
    this.googleAuth.login().then(() => { 
      let userGoogle: UserSocialProviderDetailsData = this.user.social.google.data;
      alert(userGoogle.full_name + " - " + userGoogle.email);

      this.readUserData();
      this.goToMainPage();

    }).catch((err) => { 
      alert("Auth failed - reason: " + err);
    })
  }


  loginFacebook() {
    console.log("Beginning Facebook Login");
    this.facebookAuth.login().then(() => { 
      let userFacebook: UserSocialProviderDetailsData = this.user.social.facebook.data;
      alert("Facebook data: " + userFacebook.full_name + " - " + userFacebook.email);

      this.readUserData();
      this.goToMainPage();

    }).catch((err) => { 
      alert("Auth failed - reason: " + err);
    })
  }


  /**
   * Reads all of the user's data from Ionic Auth
   */
  readUserData() {
       // Gets the user data from the server (if any existing data is present)
      let userData: UserData = this.user.get(userDataStorageKey, null);

      // If we don't see any existing data
      if (userData == null) {
        // Set this user's (local) data to default
        this.user.set(userDataStorageKey, testUserData);
        // Set our local copy to default as well
        userData = testUserData;
        alert("No data present - set to defaults!");
        this.user.save().then(() => { alert("User Data saved to Ionic!")}).catch((err) => "Error: " + err);
      } else {
        alert("data was already stored! - " + userData.toString())
      }

      for (let userStreak of userData.streaks) {
        alert("User Streak name: " + userStreak.streak.goalDescription);
      }
  }

  /**
   * Goes from the login page to the main tabbed interface
   */
  goToMainPage() {
     // FIREBASE STUFF
    // const streaks = this.db.object('/streaks').subscribe(x => console.log(x));
    console.log("Navigating to main page..");
    this.navCtrl.setRoot(TabsPage);
  }

  /**
   * Populates firebase database with data from local variables
   */
  populateDatabase() {
    const streaksDb = this.db.list("/streaks");
    allStreaks.forEach(element => {
      const streaksDb = this.db.object("/streaks/"+element.uid);
      const dbPopulatePromise = streaksDb.update(element);
    dbPopulatePromise
      .then(_ => { console.log("Successfully populated DB: "); console.log(element); } )
      .catch(err => console.log("Encountered error: " + err));
    });

  }

}