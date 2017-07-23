import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { HomeExercisePage } from '../homeexercise/homeexercise';
import { HomeDietPage } from '../homediet/homediet';
import { StartingPopoverPage } from '../popovers/startingpopover';
/*
import { ExercisePopoverPage } from './exercisepopover';
import { DietPopoverPage } from './dietpopover';
*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }


  goToHomeExercise() {
    this.navCtrl.push(HomeExercisePage); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }
  
  goToHomeDiet() {
    this.navCtrl.push(HomeDietPage); // Push allows us to go back to the previous page
                                     // as opposed to changing root. See login.ts for more info
  }
  
  presentStartingPopover(myEvent) {
    let popover = this.popoverCtrl.create(StartingPopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  /*
  presentDietPopover(myEvent) {
    let popover = this.popoverCtrl.create(DietPopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  */
}


