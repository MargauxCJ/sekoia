import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <div class="body-container not-found-container">
      <div class="not-found">
        <img src="./logo.svg" alt="logo"/>
        <h1>Bah alors ? On s'est perdu ?</h1>
        <button class="primary-button" [routerLink]="'/'">Retour aux catégories</button>
      </div>
    </div>

  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent {

}
