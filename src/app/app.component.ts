import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InstalacaoPage } from './instalacao/instalacao.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Usuários',
      url: '/list',
      icon: 'people'
    },
    {
      title: 'Grupos',
      url: '/grupos',
      icon: 'chatbubbles'
    },
    {
      title: 'Instalação',
      url: '/instalacao',
      icon: 'home'
    },
    {
      title: 'Layout',
      url: '/layout',
      icon: 'construct'
    },
    {
     title: 'Api Externa',
     url: '/api-externa',
     icon: 'arrow-dropright'
    },
    {
      title: 'Configurações',
      url: '/config',
      icon: 'cog'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
