import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  readonly #meta = inject(Meta);
  readonly #title = inject(Title);

  updateMetadata() {
    const title = $localize`:@@meta_title:Ivan Karbashevskyi - Frontend Developer - CV`;
    const description = $localize`:@@meta_description:Ivan Karbashevskyi\'s online CV. Frontend Developer with experience in JavaScript, Node.js, Angular, NestJs, and more.`;
    const keywords = $localize`:@@meta_keywords:Ivan Karbashevskyi, CV, Frontend Developer, JavaScript, Node.js, Angular, NestJs, TypeScript, software developer, web developer`;
    const imageUrl = 'https://karbashevskyi.github.io/path-to-your-image.jpg';

    // Update the page title
    this.#title.setTitle(title);

    // Update meta tags
    this.#meta.updateTag({ name: 'description', content: description });
    this.#meta.updateTag({ name: 'keywords', content: keywords });

    // Open Graph tags
    this.#meta.updateTag({ property: 'og:title', content: title });
    this.#meta.updateTag({ property: 'og:description', content: description });
    this.#meta.updateTag({ property: 'og:image', content: imageUrl });

    // Twitter card tags
    this.#meta.updateTag({ name: 'twitter:title', content: title });
    this.#meta.updateTag({ name: 'twitter:description', content: description });
    this.#meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
