import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

/**
 * Generated class for the Aggregation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-first-cond',
  templateUrl: 'first-cond.html',
})
export class FirstCondPage {

  constructor(public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountPage');
  }

}