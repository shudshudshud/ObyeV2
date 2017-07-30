import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';



@Component({
  templateUrl: 'brokenpopover2.html' 
})
export class BrokenPopoverPage2 {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
}