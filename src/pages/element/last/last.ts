import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the Aggregation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-last',
  templateUrl: 'last.html',
})
export class LastPage {

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountPage');
  }

}