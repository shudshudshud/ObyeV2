import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { SocialPage } from '../social/social';
import { SummaryPage } from '../summary/summary';
import { ChallengesPage } from '../challenges/challenges';
import { CaloriePage } from '../calorie/calorie';
import { RewardsPage } from '../rewards/rewards';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = ChallengesPage;
  tab4Root = CaloriePage;
  tab5Root = RewardsPage;

  goToSocial() {
    this.navCtrl.push(SocialPage); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }

  goToSummary() {
    this.navCtrl.push(SummaryPage); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }

  constructor(public navCtrl: NavController) {

  }
}
