import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { basketOutline, cartOutline } from 'ionicons/icons';
import { LucideAngularModule, Shield, ShoppingBag, Store } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon,LucideAngularModule,IonButtons,IonBackButton]
})
export class OptionsPage implements OnInit {
shield = Shield
store = Store
shopping = ShoppingBag

router = inject(Router)
  constructor() { 
    addIcons({
      cartOutline
    })
  }

  ngOnInit() {
  }
goToBuyersPage(){
this.router.navigate(['buyers-page'])
}
goToSellerPage(){
  this.router.navigate(['seller-page'])

}
goToAdminPage(){
    this.router.navigate(['admin-page'])

}
}
