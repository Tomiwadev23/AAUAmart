import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon } from '@ionic/angular/standalone';
import { BadgeCheck, Clock4, LucideAngularModule, Store, Users } from 'lucide-angular';
import { addIcons } from 'ionicons';
import { add, peopleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LucideAngularModule,IonIcon]
})
export class DashboardPage implements OnInit {

  constructor() {
    addIcons({
      peopleOutline,add
    })
   }
  store = Store
  bc=BadgeCheck
  users=Users
  clock=Clock4
  ngOnInit() {
  }
  products = signal<any[]>([
    {
      type: "Total Sellers",
      amount: "156",
      metrics: "",
      card: '+12 this month',
      icon: this.store
    },
    {
      type: "Total Buyers",
      amount: " 2,543",
      metrics: "",
      card: '+234 this montn',
      icon: this.users


    },
    {
      type: "Active Account",
      amount: "2056",
      metrics: "",
      card: '98.4%',
      icon: this.bc


    },
      {
      type: "Pending Accounts",
      amount: "8",
      metrics: "",
      card: 'Need Attention',
      icon: this.clock


    }


  ])

}
