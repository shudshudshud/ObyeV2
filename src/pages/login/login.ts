import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleAuth, FacebookAuth, Auth, User, UserSocialProviderDetailsData } from '@ionic/cloud-angular';
import { TabsPage } from '../tabs/tabs';

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
    </ion-col>
    </ion-row>
  </ion-grid>
  </ion-content>
`
})
export class LoginPage {
  
  constructor(public googleAuth: GoogleAuth, public facebookAuth: FacebookAuth, public auth: Auth, public user: User, public navCtrl: NavController) {
    if (this.auth.isAuthenticated()) {
      this.goToMainPage();
    }

  }

  loginGoogle() {
    console.log("Beginning Google Login");
    this.googleAuth.login().then(() => { 
      let userGoogle: UserSocialProviderDetailsData = this.user.social.google.data;
      alert(userGoogle.full_name + " - " + userGoogle.email);
      this.goToMainPage();
    }).catch((err) => { 
      alert("Auth failed - reason: " + err);
    })
    /*
    this.googleAuth.login().then((data: AuthLoginResult) => {
      console.log("yay - login success!");
      console.log(data);
    }).catch((err) => {
      console.log("Error for Google Login");
    });
    */

    console.log("Past promise")
  }


  loginFacebook() {
    console.log("Beginning Facebook Login");
    this.facebookAuth.login().then(() => { 
      let userFacebook: UserSocialProviderDetailsData = this.user.social.facebook.data;
      alert("Facebook data: " + userFacebook.full_name + " - " + userFacebook.email);
      this.goToMainPage();
    }).catch((err) => { 
      alert("Auth failed - reason: " + err);
    })
  }

  goToMainPage() {
    console.log("Navigating to main page..");
    this.navCtrl.setRoot(TabsPage);
  }

}