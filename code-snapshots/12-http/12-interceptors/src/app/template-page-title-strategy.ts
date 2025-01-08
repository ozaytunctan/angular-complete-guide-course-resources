import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`otunctan | Place Plicker | ${title}`);
    }
  }
}
