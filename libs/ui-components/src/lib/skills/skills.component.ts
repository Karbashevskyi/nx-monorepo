import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  host: {
    id: 'skills',
    class: 'scroll-mt-20'
  }
})
export class SkillsComponent {}
