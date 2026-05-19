import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton,IonButtons } from '@ionic/angular/standalone';
import { LucideAngularModule, Store } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-page',
  templateUrl: './seller-page.page.html',
  styleUrls: ['./seller-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,LucideAngularModule,IonBackButton,IonButtons]
})
export class SellerPagePage implements OnInit {
store = Store
router= inject(Router)
goToSellerPage(){
this.router.navigate(['sellersignuppage'])
}
  constructor() { }

  ngOnInit() {
  }
goToSeller(){
  this.router.navigate(['seller-tabs/dashboard'])

}
}
