import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton,IonIcon } from '@ionic/angular/standalone';
import { LucideAngularModule, User } from 'lucide-angular';
import { addIcons } from 'ionicons';
import { cameraOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton,LucideAngularModule,IonIcon]
})
export class EditprofilePage implements OnInit {



  ngOnInit() {
  }

}
