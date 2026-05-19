import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonChip,IonLabel,IonAvatar,IonIcon,IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, calendarOutline, eye, eyeOutline, pinOutline } from 'ionicons/icons';
import { Ban, Eye, LucideAngularModule, Store, Trash2 } from 'lucide-angular';
import { Router } from '@angular/router';
import {Alertservice} from'../../alertservice'
@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.page.html',
  styleUrls: ['./sellers.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonChip,IonLabel,IonAvatar,IonIcon,IonSearchbar,LucideAngularModule]
})
export class SellersPage implements OnInit {
  alertService=inject(Alertservice)
store=Store
ban=Ban
trash=Trash2
eye=Eye
router = inject(Router)
  constructor() {

    addIcons({
      add,pinOutline,calendarOutline,eyeOutline
    })
   }

  ngOnInit() {
  }
goToCreateSeller(){
  this.router.navigate(['createseller-page'])
}
showAlert(message:any){
this.alertService.presentAlert(message)
}
}
