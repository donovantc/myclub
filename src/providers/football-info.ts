import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FootballInfo provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FootballInfo {
  id : string = "";
  baseUrl : string = "api";
  leagueUrl : string = "/v1/competitions/"; //"http://api.football-data.org/v1/competitions/";

  constructor(private http: Http) {
    
  }

  getLeagues(){
    return this.performGet(this.leagueUrl);
  }

  getLeagueTeams(leagueId : number){
    let leagueTeamsUrl = `/v1/competitions/${leagueId}/teams`;
    console.log(leagueTeamsUrl);
    return new Promise((resolve, reject) => {
          this.http.get(this.baseUrl + leagueTeamsUrl,{
            headers: this._getGetHeaders()
          })
          .map(res => res.json())
          .subscribe(
            data => { resolve(data.teams); },
            err => { reject(err); }
          );
      });
  }

  performGet(serviceUrl){
    return new Promise((resolve, reject) => {
          this.http.get(this.baseUrl + serviceUrl, {
            headers: this._getGetHeaders()
          })
          .map(res => res.json())
          .subscribe(
            data => { resolve(data); },
            err => { reject(err); }
          );
      });
  }

  _getGetHeaders(){
    let headers = new Headers();
    headers.append("X-Auth-Token", "bd525452b4424ab497627f6f467a4572");
    return headers;
  }

  handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
