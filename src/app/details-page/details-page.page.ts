import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonIcon,IonButtons,IonBackButton} from '@ionic/angular/standalone';
import { arrowBack, leafOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { Alertservice } from '../alertservice';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonIcon,IonButtons,IonBackButton]
})
export class DetailsPagePage implements OnInit {
  alertService=inject(Alertservice)
router = inject(Router)
  constructor() { 
    addIcons({
      leafOutline,arrowBack
    })
  }

  ngOnInit() {
  }
  goToHome(){
this.router.navigate(['tabs/tab1'])
  }
  count = 0;

increase() {
  this.count++;
}

decrease() {
  if (this.count > 0) {
    this.count--;
  }
}
showToast(message:any){
  this.alertService.presentToast(message)
}

}
