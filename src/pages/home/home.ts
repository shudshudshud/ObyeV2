import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ExercisePopoverPage } from './exercisepopover';
import { DietPopoverPage } from './dietpopover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }


  presentExercisePopover(myEvent) {
    let popover = this.popoverCtrl.create(ExercisePopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentDietPopover(myEvent) {
    let popover = this.popoverCtrl.create(DietPopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}


