import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonSearchbar,IonIcon ,IonChip,IonLabel,IonAvatar} from '@ionic/angular/standalone';
import { Delete, DeleteIcon, Edit, LucideAngularModule, Trash2 ,} from 'lucide-angular';
import { addIcons } from 'ionicons';
import { add, optionsOutline, timeSharp } from 'ionicons/icons';
import { Router } from '@angular/router';
import { Alertservice } from '../../alertservice';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonSearchbar,IonIcon,LucideAngularModule,IonChip,IonLabel,IonAvatar]
})
export class ProductsPage implements OnInit {
  alertService=inject(Alertservice)
edit = Edit
trash = Trash2
router=inject(Router)
  constructor() { 
    addIcons({
      add,optionsOutline
    })
  }
  goToCreateProduct(){
    this.router.navigate(['createproductpage'])
  }

  ngOnInit() {
  }
  goToEditProduct(){
        this.router.navigate(['editproduct'])

  }
  showAlert(message:any){
    this.alertService.presentAlert(message)
  }

}
