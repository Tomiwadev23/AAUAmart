import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonCheckbox, IonHeader, IonTitle, IonToolbar, IonModal, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent, IonList, IonItem, IonInput, IonIcon, IonButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { eye, lockClosed, mail, person ,leaf, leafOutline} from 'ionicons/icons';
import { CircleAlert, CircleAlertIcon, Eye, EyeOff, LucideAngularModule } from 'lucide-angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [IonContent, IonSelect, IonSelectOption, IonCheckbox, IonHeader, IonTitle, IonToolbar, IonModal, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, CommonModule, IonSegmentContent, FormsModule, IonList, IonItem, IonInput, IonIcon, IonButton, LucideAngularModule]
})
export class SplashPage implements OnInit {
  router = inject(Router)
  navCtrl=inject(NavController)
  ca = CircleAlertIcon

  constructor() {
    addIcons({ eye, mail, lockClosed, person,leafOutline});
  }

  ngOnInit() {
  }
  goToLogin() {
    this.router.navigate(['/login'])
    

  }

  goToOption(){
    this.router.navigate(['/options'])
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
        // this.router.navigate(['/verifyemail'])

  }
  goTohome(real:boolean){
    this.setOpen(real)
       setTimeout(()=>{
this.navCtrl.navigateRoot('/tabs/tab1');

    },500)

  }
  goToVerifyemail(real:boolean) {
    this.setOpen(real)
    setTimeout(()=>{
    this.router.navigate(['/verifyemail'])

    },500)


  }



}
