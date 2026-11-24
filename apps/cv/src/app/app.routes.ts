import { Route } from '@angular/router';
import { CvPageComponent } from './pages/cv.page';
import { StoryPageComponent } from './pages/story.page';

export const appRoutes: Route[] = [
  { path: '', component: CvPageComponent },
  { path: 'story', component: StoryPageComponent },
  { path: '**', redirectTo: '' }
];
