import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public readonly languages = [
    {
      code: 'uk-UA',
      name: 'Українська'
    },
    {
      code: 'en-US',
      name: 'English'
    },
    {
      code: 'pl-PL',
      name: 'Polski'
    }
  ];

}
