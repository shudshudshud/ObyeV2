import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ChallengesPage } from '../pages/challenges/challenges';
import { CaloriePage } from '../pages/calorie/calorie';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SocialPage } from '../pages/social/social';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Ionic Cloud services (used for auth)
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

// Settings for the Ionic Cloud service
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'df46f233'
  },
  'auth': {
    'google': {
      'webClientId': '1033632876363-86c0kg5a20l6d8vmh7jhgdciu3a0fcpv.apps.googleusercontent.com',
    },
    'facebook': {
      'scope': []// ['permission1', 'permission2']
    }
  }
};


@NgModule({
  declarations: [
    MyApp,
    ChallengesPage,
    CaloriePage,
    SocialPage,
    HomePage,
    TabsPage,
    SettingsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChallengesPage,
    CaloriePage,
    SocialPage,
    HomePage,
    TabsPage,
    SettingsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
