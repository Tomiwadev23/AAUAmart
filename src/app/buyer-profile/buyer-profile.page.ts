import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,IonSearchbar,IonIcon } from '@ionic/angular/standalone';
import { LucideAngularModule, User } from 'lucide-angular';
import { cameraOutline, personOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Alertservice } from '../alertservice';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.page.html',
  styleUrls: ['./buyer-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,IonSearchbar,LucideAngularModule,IonIcon]
})
export class BuyerProfilePage implements OnInit {
alertService=inject(Alertservice)
user=User
  constructor() {
    addIcons({
      cameraOutline,personOutline
    })
   }
  ngOnInit() {
  }
  presentToast(message:any){
    this.alertService.presentToast(message)
  }

}
