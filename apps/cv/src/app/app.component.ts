import { Component, inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import {
  AboutComponent,
  ArticlesComponent,
  CardComponent,
  EducationComponent, ExperienceComponent,
  FooterComponent, ProfileComponent, SkillsComponent,
  SubscribeComponent
} from '@nx-monorepo/ui-components';
import { IStaticMethods } from 'preline/preline';
import { WINDOW } from '../window.token';
import { isPlatformBrowser } from '@angular/common';
import { IPerson } from '@nx-monorepo/interfaces';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  standalone: true,
  imports: [RouterModule, CardComponent, FooterComponent, FooterComponent, SubscribeComponent, ArticlesComponent, EducationComponent, ExperienceComponent, ProfileComponent, AboutComponent, SkillsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly WINDOW = inject(WINDOW);
  private readonly PLATFORM_ID = inject(PLATFORM_ID);

  public readonly person: IPerson = {
    contact: {
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/ivan-karbashevskyi',
        github: 'https://github.com/Karbashevskyi',
        instagram: 'https://www.instagram.com/ivan.karbashevskyi',
        facebook: 'https://www.facebook.com/profile.php?id=100073273055756',
        x: 'https://x.com/Karbashevskyi'
      },
      email: 'ivan.karbashevskyi@gmail.com'
    }
  };

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
