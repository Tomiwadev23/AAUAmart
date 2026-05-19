import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonIcon,IonSearchbar,IonBackdrop ,IonList,IonItem} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {  close, ellipsisVertical, leafOutline, notifications, options, optionsOutline, pawOutline, pinOutline, shirtOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FarmproducePage } from '../farmproduce/farmproduce.page';
import { ClothesPage } from '../clothes/clothes.page';
import { LivestocksPage } from '../livestocks/livestocks.page';
import Swiper from 'swiper';
import { Navigation, Pagination ,Autoplay, EffectFade} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Router } from '@angular/router';
Swiper.use([Autoplay, Navigation, Pagination,EffectFade]);
type Category = 'agric' | 'livestock' | 'clothes';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonIcon, ExploreContainerComponent,IonSearchbar,FarmproducePage,ClothesPage,LivestocksPage,IonBackdrop,IonList,IonItem],
})

export class Tab1Page implements AfterViewInit {
  router=inject(Router)
  constructor() {
    addIcons({notifications,ellipsisVertical,leafOutline,pawOutline,shirtOutline,close,pinOutline,optionsOutline,})
  }


   ngAfterViewInit(){
const swiper = new Swiper('.swiper', {
  
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 1500,

    autoplay: {
      delay: 1000,          // 3 seconds
      disableOnInteraction: false, // continue after user swipe
    },
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
 }
 readonly categories = [
    { id: 'agric', label: 'Agric', icon: 'leaf-outline' },
    { id: 'livestock', label: 'Livestock', icon: 'paw-outline' },
    { id: 'clothes', label: 'Clothes', icon: 'shirt-outline' },
  ] as const;

  activeCategory: Category = 'agric';

  selectCategory(cat: Category) {
    this.activeCategory = cat;
  }


  searchs=[{
    name:"Tomatoes",
    category:"farm produce",
    available:"true",
    amount:"1200"


  }]

  goToProfile(){
    this.router.navigate(['tabs/tab4'])
  }
}
