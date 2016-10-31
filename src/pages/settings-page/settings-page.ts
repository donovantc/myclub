import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FootballInfo } from '../../providers/football-info';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the SettingsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings-page',
  templateUrl: 'settings-page.html',
  providers: [FootballInfo]
})
export class SettingsPage {
  leagues : any = [];
  teams : any = [];

  selectedTeam : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private footballInfo: FootballInfo) {}

  ionViewDidLoad() {
    this.footballInfo.getLeagues().then((data) => {
      console.log(data);
      this.leagues = data;
    });
  }

  leagueChanged(selectedId : number) {
    if(!selectedId)
      return;

    this.teams = [];
    
    this.loadLeagueTeams(selectedId);
  }

  loadLeagueTeams(leagueId : number){
    this.footballInfo.getLeagueTeams(leagueId).then((data) => {
      console.log(data);
      this.teams = data;

      this.teams.sort((a,b) => {
        return a.name < b.name;
      })

      this._addIdToTeams();
    });
  }

  teamChanged(selectedTeamId){
    this.selectedTeam = this._getTeamFromId(selectedTeamId);
  }

  submitTeam(){
    this.navCtrl.push(TabsPage, {selectedTeam: this.selectedTeam});
  }

  _addIdToTeams(){
    for (let team of this.teams){
      team.id = this._extractTeamIdFromUrl(team._links.self.href);
    }
  }

  _extractTeamIdFromUrl(url: string){
    if(!url)
      return null;

    //format = http://api.football-data.org/v1/teams/62
    let result = url.substr(url.lastIndexOf("/") + 1);
    return result;
  }

  _getLeagueFromId(leagueId){
    /*Retrieve the league*/
    let selectedLeague = this.leagues.filter((value, index, arrayObject) => {
        return value.id == leagueId;
    });

    if(!!selectedLeague)
      return {};

    return selectedLeague[0];
  }

  _getTeamFromId(teamId){
    let selectedTeam = this.teams.filter((value) => {
      return value.id == teamId;
    })

    if (!selectedTeam)
      return;

    return selectedTeam[0];
  }

}
