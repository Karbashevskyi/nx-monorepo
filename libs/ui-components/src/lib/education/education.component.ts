import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  host: {
    id: 'education',
    class: 'scroll-mt-20'
  }
})
export class EducationComponent {}
