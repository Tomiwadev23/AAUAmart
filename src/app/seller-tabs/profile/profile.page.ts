import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,IonIcon,IonList,IonItem,IonToggle } from '@ionic/angular/standalone';
import { ChevronRight, Languages, LogOut, LucideAngularModule, Shield, ShoppingBag } from 'lucide-angular';
import { addIcons } from 'ionicons';
import { add, arrowBack, calendarOutline, callOutline, cardOutline, cartOutline, ellipsisVertical, helpCircleOutline, homeOutline, mailOutline, moonOutline, notificationsOutline, pinOutline, sunnyOutline, walletOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import{Alertservice} from '../../alertservice'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,IonIcon,IonList,IonItem,IonToggle,LucideAngularModule]
})
export class ProfilePage implements OnInit {
  alertService=inject(Alertservice)
shopping = ShoppingBag
chevR = ChevronRight
languages = Languages
shield = Shield
logout = LogOut
router=inject(Router)
  constructor() { 
    addIcons({
       pinOutline,mailOutline,callOutline,calendarOutline,cartOutline,walletOutline,add,homeOutline,ellipsisVertical,moonOutline,cardOutline,notificationsOutline,helpCircleOutline,sunnyOutline,arrowBack
    })
  }

  ngOnInit() {
  }
  goToSplash(){
    this.router.navigate(['splash'])
  }

}
