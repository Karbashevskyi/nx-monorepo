import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { CardComponent } from '@nx-monorepo/ui-components';
import { IStaticMethods } from 'preline/preline';
import { WINDOW } from '../window.token';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  standalone: true,
  imports: [RouterModule, CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cards = [
    { title: 'Card 1', content: 'This is card 1' },
    { title: 'Card 2', content: 'This is card 2' },
    { title: 'Card 3', content: 'This is card 3' }
  ];
  private readonly router = inject(Router);
  private readonly WINDOW = inject(WINDOW);
  private readonly PLATFORM_ID = inject(PLATFORM_ID);

  ngOnInit() {
    if (isPlatformBrowser(this.PLATFORM_ID)) {

      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.WINDOW.HSStaticMethods.autoInit();
          }, 100);
        }
      });
    }
  }
}
