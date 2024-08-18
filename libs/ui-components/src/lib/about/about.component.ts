import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPerson } from '@nx-monorepo/interfaces';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  host: {
    id: 'about',
    class: 'scroll-mt-20'
  }
})
export class AboutComponent {
  public readonly person = input.required<IPerson>();
}
