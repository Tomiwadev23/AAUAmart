import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonIcon,IonSearchbar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { cartOutline, close, exitOutline, optionsOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonIcon,IonSearchbar]
})
export class Tab2Page {
router = inject(Router)
  constructor() {
    addIcons({
      exitOutline,close,cartOutline,optionsOutline
    })
  }
  goToDetails(){
this.router.navigate(['details-page'])
  }
   carts = [
  {
    name: 'Tomatotoes',
    processor: 'perishable',
    storage: '12GB * 256GB',
    sort: '6.8 * Dynamic AMOLED,120Hz',
    amount: '1,999',
    chicAmount: '1,220',
    rate: '4.8'
  },
  {
    name: 'iPhone 15 Pro Max',
    processor: 'A17 Pro Chip',
    storage: '8GB * 256GB',
    sort: '6.7 * Super Retina XDR,120Hz',
    amount: '2,199',
    chicAmount: '1,780',
    rate: '4.9'
  },
  {
    name: 'Xiaomi 14 Ultra',
    processor: 'Snapdragon 8 Gen 3',
    storage: '16GB * 512GB',
    sort: '6.73 * AMOLED LTPO,120Hz',
    amount: '1,599',
    chicAmount: '1,120',
    rate: '4.7'
  },
  {
    name: 'OnePlus 12',
    processor: 'Snapdragon 8 Gen 3',
    storage: '12GB * 256GB',
    sort: '6.82 * AMOLED ProXDR,120Hz',
    amount: '1,299',
    chicAmount: '980',
    rate: '4.6'
  },
  {
    name: 'Infinix Zero 30',
    processor: 'Dimensity 8020',
    storage: '12GB * 256GB',
    sort: '6.78 * AMOLED 144Hz',
    amount: '499',
    chicAmount: '320',
    rate: '4.4'
  },
  {
    name: 'Tecno Phantom X2 Pro',
    processor: 'Dimensity 9000',
    storage: '12GB * 256GB',
    sort: '6.8 * AMOLED,120Hz',
    amount: '899',
    chicAmount: '640',
    rate: '4.3'
  }
]

}
