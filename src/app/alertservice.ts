import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController,AlertController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class Alertservice {
  constructor(private toastController: ToastController,private alertController:AlertController) { }
router=inject(Router)
  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      cssClass: 'cart-toast', // 👈 this links to your CSS

    });

    await toast.present();
  }

    async presentAlert(message:any) {
    const alert = await this.alertController.create({
    
      message: message,
      buttons: [   {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },],
    });

    await alert.present();
  }
      async presentlogOutAlert() {
    const alert = await this.alertController.create({
    
      message: 'Are you You want to log out',
      buttons: [   {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
this.router.navigate(['splash'])      },
    },],
    });

    await alert.present();
  }
}
