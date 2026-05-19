import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { LucideAngularModule, ShoppingBag } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyers-page',
  templateUrl: './buyers-page.page.html',
  styleUrls: ['./buyers-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,LucideAngularModule]
})
export class BuyersPagePage implements OnInit {
shopping = ShoppingBag
router = inject(Router)
  constructor() { }
goToBuyersignUp(){
this.router.navigate(['buyersignup'])

}
goToHome(){
  this.router.navigate(['tabs/tab1'])
}
  ngOnInit() {
  }

}
