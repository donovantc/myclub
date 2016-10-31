import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular'

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings-page/settings-page';
import { FixturesPage } from '../pages/fixtures/fixtures';
import { ScoresPage } from '../pages/scores/scores';
import { FootballInfo } from '../providers/football-info';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '81180756'
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    FixturesPage,
    ScoresPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SettingsPage,
    FixturesPage,
    ScoresPage
  ],
  providers: [FootballInfo]
})
export class AppModule {}
