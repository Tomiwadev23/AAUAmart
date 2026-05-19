import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon, } from '@ionic/angular/standalone';
import { Ban, CheckCircle, Eye, LucideAngularModule, Store, Trash2, User } from 'lucide-angular';
import { addIcons } from 'ionicons';
import{Alertservice} from '../../alertservice'
@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.page.html',
  styleUrls: ['./buyers.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,LucideAngularModule,IonIcon]
})
export class BuyersPage implements OnInit {
  alertService=inject(Alertservice)
user=User
ban=Ban
store=Store
eye=Eye
trash=Trash2
cc=CheckCircle
  constructor() {
    addIcons({
      
    })
   }

  ngOnInit() {
  }
showToast(message:any){
  this.alertService.presentToast(message)
}
showAlert(message:any){
this.alertService.presentAlert(message)
}
}
