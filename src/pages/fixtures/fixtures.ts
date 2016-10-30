import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FootballInfo } from '../../providers/football-info';
/*
  Generated class for the Fixtures page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html',
  providers: [FootballInfo]
})
export class FixturesPage {
  fixtures : any = [];
  selectedTeam : any = {};

  constructor(public navCtrl: NavController, public navParams : NavParams, private footballInfo: FootballInfo) {}

  ionViewDidLoad() {
    console.log(this.navParams);
    this.extractSelectTeam();

    this.footballInfo.getTeamFixtures(this.selectedTeam.id, 'n', 99).then((data) => {
      console.log(data);
      this.fixtures = data;
    });
  }

  extractSelectTeam(){
    this.selectedTeam = this.navParams.data.selectedTeam;
  }

}
