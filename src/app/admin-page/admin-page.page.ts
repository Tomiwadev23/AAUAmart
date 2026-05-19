import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { LucideAngularModule, Shield, ShoppingBag } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,LucideAngularModule]
})
export class AdminPagePage implements OnInit {
shopping = ShoppingBag
shield = Shield
router = inject(Router)
  constructor() { }
goToAdminSignUp(){
this.router.navigate(['adminsignuppage'])
}
goToAdmin(){
  this.router.navigate(['admin-tabs/dashboard'])

}
  ngOnInit() {
  }

}
