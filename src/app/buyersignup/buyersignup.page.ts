import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCheckbox,IonBackButton,IonButtons } from '@ionic/angular/standalone';
import { LucideAngularModule, ShoppingBag } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyersignup',
  templateUrl: './buyersignup.page.html',
  styleUrls: ['./buyersignup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonCheckbox,LucideAngularModule,IonBackButton,IonButtons]
})
export class BuyersignupPage implements OnInit {
  router = inject(Router)
shopping= ShoppingBag
  constructor() { }

  ngOnInit() {
  }
goToVerifyemail(){
this.router.navigate(['verifyemail'])
}
goToBuyersPage(){
this.router.navigate(['buyers-page'])
}
}
