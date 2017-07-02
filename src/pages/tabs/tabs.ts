import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { SocialPage } from '../social/social';
import { ChallengesPage } from '../challenges/challenges';
import { CaloriePage } from '../calorie/calorie';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChallengesPage;
  tab3Root = CaloriePage;
  tab4Root = SocialPage;

  goToSettings() {
    this.navCtrl.push(SettingsPage); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }

  constructor(public navCtrl: NavController) {

  }
}
