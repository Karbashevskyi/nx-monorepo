import { Route } from '@angular/router';
import { CvPage } from './pages/cv.page';
import { StoryPage } from './pages/story.page';

export const appRoutes: Route[] = [
  { path: '', component: CvPage },
  { path: 'story', component: StoryPage },
  { path: '**', redirectTo: '' }
];
