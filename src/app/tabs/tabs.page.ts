import { Component, ElementRef, EnvironmentInjector, HostListener, inject, signal, ViewChild, viewChild } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonHeader,IonToolbar,IonSearchbar,IonList,IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, bicycleOutline, homeOutline, personOutline, cartOutline,ellipsisVertical,notifications,search,exitOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,IonHeader,IonToolbar,IonSearchbar,IonList,IonItem],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  @ViewChild('popover') popover?: ElementRef;
  @ViewChild('menuBtn') menuBtn?: ElementRef;


  constructor() {
    addIcons({ triangle, ellipse, square,bicycleOutline,homeOutline,personOutline,cartOutline,ellipsisVertical,notifications,search,exitOutline });
  }

    open = signal(true)
toggleSearch(){
  this.open.update((open)=>!open)
}
openMenu =signal(true)
toggleMenu (){
  this.openMenu.update((openMenu)=>!openMenu)
}

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
   const target = event.target as Node;

    // if popover is open and click happened outside popover & button → close
    if (
      this.openMenu() &&
      !this.popover?.nativeElement.contains(target) &&
      !this.menuBtn?.nativeElement.contains(target)
    ) {
      console.log('this is good');
    }
}
}
