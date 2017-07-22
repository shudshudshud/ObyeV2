import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAuth, FacebookAuth, Auth, User, UserSocialProviderDetailsData, UserSocialProviderDetails } from '@ionic/cloud-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  // Shared vars
  name: String;
  picture: String;

  constructor(public navCtrl: NavController, public user: User) {
    //this.user = user;
    //alert(JSON.stringify(this.user.details));
    //alert(JSON.stringify(this.user.social.facebook));
    //alert(JSON.stringify(this.user.social.google));
    
    // Find out if we are using Google or Facebook
    let profile: UserSocialProviderDetails = null;

    if (this.user.social.google != undefined) {
      profile = this.user.social.google;
    } else if (this.user.social.facebook != undefined) {
      profile = this.user.social.facebook;
   }

    // Test
    if (profile == undefined) {
      this.name = "2 Chainz";
      this.picture = "https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg"
    } else {
      this.name = profile.data.full_name;
      this.picture = profile.data.profile_picture;
    }

  }
}
