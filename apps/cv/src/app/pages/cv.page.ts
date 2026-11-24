import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AboutComponent,
  ArticlesComponent,
  EducationComponent,
  ExperienceComponent,
  ProfileComponent,
  ProjectsComponent,
  SkillsComponent
} from '@nx-monorepo/ui-components';
import { PERSON } from '../person';

@Component({
  standalone: true,
  selector: 'app-cv-page',
  imports: [
    RouterLink,
    ProfileComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    ArticlesComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lib-profile/>
    <lib-about [person]="person"/>

    <!-- Story teaser (not part of the printed CV) -->
    <a routerLink="/story"
       class="card group/story mt-10 flex items-center justify-between gap-4 print:hidden">
      <div>
        <p class="font-mono text-xs uppercase tracking-wider text-lime-700 dark:text-lime-400" i18n="@@story_nav">My story</p>
        <p class="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400" i18n="@@story_teaser">
          From a city budget portal built at 19 in Chernivtsi to my own products and studio: the longer version of this CV.
        </p>
      </div>
      <i class="bi bi-arrow-right text-xl text-neutral-400 transition-transform group-hover/story:translate-x-1 group-hover/story:text-lime-500"></i>
    </a>

    <lib-skills/>
    <lib-experience/>
    <lib-projects/>
    <lib-education/>
    <lib-articles/>
  `
})
export class CvPageComponent {
  protected readonly person = PERSON;
}
