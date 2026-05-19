import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon,IonList,IonItem,IonToggle,IonButtons,IonBackButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, arrowBack, calendar, calendarOutline, callOutline, cardOutline, cartOutline, ellipsisVertical, helpCircleOutline, homeOutline, mailOutline, moonOutline, notificationsOutline, pinOutline, sunnyOutline, trophyOutline, walletOutline } from 'ionicons/icons';
import { ChevronRight, Languages, LogOut, LucideAngularModule, Shield, ShoppingBag } from 'lucide-angular';
import { Router } from '@angular/router';
import { Alertservice } from '../alertservice';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon,IonItem,IonList,IonToggle,LucideAngularModule,IonButtons,IonBackButton]
})
export class Tab4Page implements OnInit {
  alertService=inject(Alertservice)
shopping = ShoppingBag
chevR = ChevronRight
languages = Languages
shield = Shield
logout = LogOut
router = inject(Router)
  constructor() {
    addIcons({
      pinOutline,mailOutline,callOutline,calendarOutline,cartOutline,walletOutline,add,homeOutline,ellipsisVertical,moonOutline,cardOutline,notificationsOutline,helpCircleOutline,sunnyOutline,arrowBack
    })
   }

  ngOnInit() {
  }
goToHome(){
  this.router.navigate(['tabs/tab1'])
}
goToSplash(){
  this.router.navigate(['splash'])
}
goToOrderHistory(){
  this.router.navigate(['order-history'])
  console.log('this is good');
  

}
goToBuyerProfile(){
  this.router.navigate(['buyer-profile'])

}
showAlert(){
  this.alertService.presentlogOutAlert()
}
}
