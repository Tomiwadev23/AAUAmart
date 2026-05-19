import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { LucideAngularModule, Mail } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.page.html',
  styleUrls: ['./verifyemail.page.scss'],
  standalone: true,
  imports: [IonContent,IonButtons,IonBackButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,LucideAngularModule]
})
export class VerifyemailPage implements OnInit {
  emailc = Mail
  router=inject(Router)

  constructor() { }

  ngOnInit() {
  }
  goToSplash(){
    this.router.navigate(['buyersignup'])

  }

}
