import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { FixturesPage } from '../fixtures/fixtures';
import { ScoresPage } from '../scores/scores';

import { SettingsPage } from '../settings-page/settings-page';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FixturesPage;
  tab2Root: any = ScoresPage;
  tab3Root: any = SettingsPage;

  constructor(public navParams: NavParams) {
    
  }
}
