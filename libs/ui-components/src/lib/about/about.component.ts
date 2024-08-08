import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPerson } from '@nx-monorepo/interfaces';

@Component({
  selector: 'lib-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public readonly person = input.required<IPerson>();
}
