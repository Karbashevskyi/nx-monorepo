import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  host: {
    id: 'profile',
    class: 'scroll-mt-20'
  }
})
export class ProfileComponent {}
