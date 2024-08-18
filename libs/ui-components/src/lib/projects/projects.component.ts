import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  host: {
    id: 'projects',
    class: 'scroll-mt-20'
  }
})
export class ProjectsComponent {}
