import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from "@angular/core";
import {AuthService} from "./auth.service";

@Directive({
  standalone: true,
  selector: '[hasAuthority]'
})
export class HasAuthorityDirective {
   authorities = input.required<string[] | string>({alias: 'hasAuthority'});

  templateRef = inject(TemplateRef);
  vcf = inject(ViewContainerRef);
  authService = inject(AuthService);

  constructor() {
    effect(() => {
        let permission = this.authService.activePermission();
        if (this.authorities().includes(permission)) {
          this.vcf.createEmbeddedView(this.templateRef,
            {
              $implicit: true
            }
          );
        } else {
          this.vcf.clear();
        }
      }
    );


  }

}
