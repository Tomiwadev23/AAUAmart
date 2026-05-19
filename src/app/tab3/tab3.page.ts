import { Component, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonButtons,IonBackButton,IonSearchbar,IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { arrowDown, bicycle, calendar, calendarOutline, card, cardOutline, cart, cartOutline, checkmark, checkmarkCircle, checkmarkCircleOutline, pin, pinOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonButtons,IonBackButton,IonSearchbar,IonIcon],
})
export class Tab3Page {

  router = inject(Router)
  constructor() {
    addIcons({
      checkmarkCircleOutline,bicycle,arrowDown,cartOutline,checkmarkCircle,calendarOutline,pinOutline,cardOutline
    })
  }


  opendrop = signal(false)
  closeMenu = signal(false)



  toggledropdown(){
    this.opendrop.update((opendrop) => !opendrop)
    console.log('working');
    
  }

  goToTrackOrder(){
    this.router.navigate(['track-order'])
  }
}
