import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonButtons,IonBackButton,IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cameraOutline, personOutline } from 'ionicons/icons';
import { LucideAngularModule, User } from 'lucide-angular';
import { Alertservice } from '../alertservice';

@Component({
  selector: 'app-createseller-page',
  templateUrl: './createseller-page.page.html',
  styleUrls: ['./createseller-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonButtons,IonBackButton,IonIcon,LucideAngularModule]
})
export class CreatesellerPagePage implements OnInit {
  alertService=inject(Alertservice)
user=User
  constructor() {
    addIcons({
      cameraOutline,personOutline
    })
   }

  ngOnInit() {
  }
showToast(message:any){
  this.alertService.presentToast(message)
}
}
