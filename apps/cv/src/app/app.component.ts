import { Component, inject, OnInit, PLATFORM_ID, signal, ViewEncapsulation } from '@angular/core';
import { Event, NavigationEnd, Router, RouterModule } from '@angular/router';
import { FooterComponent } from '@nx-monorepo/ui-components';
import { IStaticMethods } from 'preline/preline';
import { WINDOW } from '../window.token';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MetadataService } from '../cdk/metadata.service';

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  standalone: true,
  imports: [RouterModule, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private readonly metadataService = inject(MetadataService);
  private readonly router = inject(Router);
  private readonly WINDOW = inject(WINDOW);
  private readonly document = inject(DOCUMENT);
  private readonly PLATFORM_ID = inject(PLATFORM_ID);

  /** True on the "My story" page: the PDF export covers the CV only. */
  protected readonly isStory = signal(false);

  ngOnInit() {
    this.metadataService.updateMetadata();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isStory.set(event.urlAfterRedirects.split(/[?#]/)[0].endsWith('/story'));
        if (isPlatformBrowser(this.PLATFORM_ID)) {
          setTimeout(() => this.WINDOW.HSStaticMethods?.autoInit(), 100);
        }
      }
    });
  }

  /**
   * Opens the browser's print dialog for the CV page ("Save as PDF").
   * The page is printed in the light theme and without navigation, the footer
   * and the story teaser (all marked print:hidden).
   */
  protected downloadPdf(): void {
    if (!isPlatformBrowser(this.PLATFORM_ID)) {
      return;
    }
    const html = this.document.documentElement;
    const wasDark = html.classList.contains('dark');
    const title = this.document.title;

    html.classList.remove('dark');
    this.document.title = 'Ivan-Karbashevskyi-CV';

    const restore = () => {
      if (wasDark) {
        html.classList.add('dark');
      }
      this.document.title = title;
      this.WINDOW.removeEventListener('afterprint', restore);
    };
    this.WINDOW.addEventListener('afterprint', restore);
    this.WINDOW.print();
  }
}
