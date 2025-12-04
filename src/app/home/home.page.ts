import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TopbarComponent } from "../components/topbar/topbar.component";
import { BottomBarComponent } from "../components/bottom-bar/bottom-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, TopbarComponent, RouterOutlet, BottomBarComponent],
})
export class HomePage {
  constructor() {}
}
