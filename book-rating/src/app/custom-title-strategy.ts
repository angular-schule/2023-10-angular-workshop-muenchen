import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';


@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private title: Title) { super(); }

  updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState) ?? '?';
    this.title.setTitle(title + ' | Book Rating');
  }
}
