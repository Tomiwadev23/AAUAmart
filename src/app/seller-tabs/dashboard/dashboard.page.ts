import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, cartOutline, cubeOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon]
})
export class DashboardPage implements OnInit {
router=inject(Router)
  constructor() { 
    addIcons({
      add,cubeOutline,cartOutline
    })
  }

  ngOnInit() {
  }
products=signal<any[]>([
    {
      type:"Total Orders",
      amount:"1,234",
      metrics:"+7.8%"
    },
      {
      type:"Total Revenue",
      amount:" ₦245,000.00",
      metrics:"-2.4%"
    },
      {
      type:"Active Users",
      amount:"20",
      metrics:"+3.4%"
    }


  ])
  goToCreateProduct(){
    this.router.navigate(['createproductpage'])
  }
  goToViewOrder(){
    this.router.navigate(['seller-tabs/products'])
  }
  goToManageProduct(){
        this.router.navigate(['seller-tabs/products'])

  }
}
