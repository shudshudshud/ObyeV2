import { Component } from '@angular/core';
import { GoogleAuth, Auth, User, UserSocialProviderDetailsData } from '@ionic/cloud-angular';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Login</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
  <button ion-button (click)="loginGoogle()">
    Log in with Google!
  </button>
  </ion-content>
`
})
export class LoginPage {
  
  constructor(public googleAuth: GoogleAuth, public auth: Auth, public user: User) {

  }

  loginGoogle() {
    console.log("Beginning Google Login");
    this.googleAuth.login().then(() => { 
      let userGoogle: UserSocialProviderDetailsData = this.user.social.google.data;
      alert(userGoogle.full_name + " - " + userGoogle.email);
    }).catch(() => { 
      alert("Auth failed!");
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

}