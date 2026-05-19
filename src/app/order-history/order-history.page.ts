import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonList,IonItemSliding,IonItemOptions,IonItemOption,IonIcon,IonItem,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.page.html',
  styleUrls: ['./order-history.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonList,IonItemSliding,IonItemOptions,IonItemOption,IonIcon,IonItem,IonButtons,IonBackButton]
})
export class OrderHistoryPage implements OnInit {

  constructor() {
    addIcons({trash})
   }

  ngOnInit() {
  }

}
