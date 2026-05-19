import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonButtons,IonBackButton,IonIcon } from '@ionic/angular/standalone';
import { LucideAngularModule, User } from 'lucide-angular';
import { addIcons } from 'ionicons';
import { cameraOutline, personOutline } from 'ionicons/icons';
import { Alertservice } from '../alertservice';

@Component({
  selector: 'app-createproductpage',
  templateUrl: './createproductpage.page.html',
  styleUrls: ['./createproductpage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonButtons,IonBackButton,IonIcon,LucideAngularModule]
})
export class CreateproductpagePage implements OnInit {
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
