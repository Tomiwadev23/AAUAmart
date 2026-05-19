import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { options, optionsOutline } from 'ionicons/icons';
import { Alertservice } from '../../alertservice';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonIcon]
})
export class OrdersPage implements OnInit {
alertService=inject(Alertservice)
  constructor() {
    addIcons({
      optionsOutline
    })
   }

  ngOnInit() {
  }
showToast(message:any){
this.alertService.presentToast(message)
}
showAlert(message:any){
  this.alertService.presentAlert(message)
}
}
