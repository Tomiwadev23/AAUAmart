import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-buyer-address',
  templateUrl: './buyer-address.page.html',
  styleUrls: ['./buyer-address.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons,IonBackButton,IonSearchbar]
})
export class BuyerAddressPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
