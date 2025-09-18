import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-loading',
  template: `
      <div class="loading-animation"></div>
  `,
  imports: [
    FormsModule,
  ],
  standalone: true,
})
export class LoadingComponent {

}
