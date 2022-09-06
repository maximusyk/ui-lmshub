import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Directive, ElementRef } from '@angular/core';
import { take } from 'rxjs';

declare let google: any;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'google-signin-button',
  standalone: true,
})
export class GoogleButtonDirective {
  constructor(el: ElementRef, private socialAuthService: SocialAuthService) {
    this.render(el);
  }

  render(el: ElementRef<any>) {
    this.socialAuthService.initState.pipe(take(1)).subscribe(() => {
      google.accounts.id.renderButton(el.nativeElement, {
        type: 'standart',
        size: 'medium',
        height: 40,
        width: 40,
      });
    });
  }
}
