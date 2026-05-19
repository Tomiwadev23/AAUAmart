import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline, cubeOutline, gridOutline, homeOutline, personOutline } from 'ionicons/icons';
import { ChartLine, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-seller-tabs',
  templateUrl: './seller-tabs.page.html',
  styleUrls: ['./seller-tabs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonTabs,IonTabBar,IonTabButton,IonIcon,IonLabel,LucideAngularModule]
})
export class SellerTabsPage implements OnInit {
chart=ChartLine
  constructor() { }

  ngOnInit() {
    addIcons({
      homeOutline,cubeOutline,cartOutline,personOutline,gridOutline
    })
  }

}
