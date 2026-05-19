import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, peopleOutline, personCircleOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-admin-tabs',
  templateUrl: './admin-tabs.page.html',
  styleUrls: ['./admin-tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel]
})
export class AdminTabsPage implements OnInit {

  constructor() { 
    addIcons({
      gridOutline,personCircleOutline,settingsOutline,peopleOutline
    })
  }

  ngOnInit() {
  }

}
