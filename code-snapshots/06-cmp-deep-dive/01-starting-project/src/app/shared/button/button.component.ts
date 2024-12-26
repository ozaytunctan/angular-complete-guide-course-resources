import {Component} from '@angular/core';

/**
 *
 * Example:
 *  <button base-button>
 *    Logout
 *    <span class="icon">→</span>
 *  </button>
 *
 *   <button base-button>
 *    Logout
 *   <span ngProjectAs="icon">→</span>
 *  </button>
 *
 *
 *
 */


@Component({
  selector: 'button[base-button],a[base-button]',// button ve link üzerinde base-button attribute olarak kullanılabilir
  standalone: true,
  imports: [],
  template: `
    <span>
      <ng-content/>
    </span>
    <ng-content select=".icon"/>
    <!--    <ng-content select="icon"/>-->

  `,
  styleUrl: './button.component.css'
})
export class ButtonComponent {
}
