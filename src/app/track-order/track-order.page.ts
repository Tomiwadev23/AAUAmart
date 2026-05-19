import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,IonSearchbar,IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, checkmark, navigate, navigateOutline, pinOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,IonSearchbar,IonIcon]
})
export class TrackOrderPage implements OnInit {
router = inject(Router)
  constructor() {
    addIcons({
      arrowBack,checkmark,navigateOutline,pinOutline
    })
   }
 goToTrack(){
this.router.navigate(['tabs/tab3'])

 }
  ngOnInit() {
  }

}
