import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-subscribe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss',
  host: {
    id: 'subscribe',
    class: 'scroll-mt-20'
  }
})
export class SubscribeComponent {}
