import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PERSON } from '../person';

@Component({
  standalone: true,
  selector: 'app-story-page',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './story.page.html'
})
export class StoryPageComponent {
  protected readonly person = PERSON;
}
