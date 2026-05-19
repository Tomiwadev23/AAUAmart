import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCheckbox } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sellersignuppage',
  templateUrl: './sellersignuppage.page.html',
  styleUrls: ['./sellersignuppage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCheckbox]
})
export class SellersignuppagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
goToVerifyemail(){

}
}
