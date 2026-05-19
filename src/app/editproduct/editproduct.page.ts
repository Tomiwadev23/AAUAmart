import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,IonIcon} from '@ionic/angular/standalone';
import { LucideAngularModule, User } from 'lucide-angular';
import { addIcons } from 'ionicons';
import { cameraOutline, personOutline } from 'ionicons/icons';
import { Alertservice } from '../alertservice';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.page.html',
  styleUrls: ['./editproduct.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,LucideAngularModule,IonIcon]
})
export class EditproductPage implements OnInit {
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
