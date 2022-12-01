import { ElementRef, Injectable } from '@angular/core';
import { before } from 'lodash';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LightDarkModeService {
  actualMode = new BehaviorSubject(true);
  changeMode(darkMode: boolean) {
    this.actualMode.next(darkMode);
  }

  constructor() {}

  setTheme(darkMode: boolean, element: HTMLElement) {
    if (!darkMode) {
      element.querySelectorAll('.darkMode').forEach((el) => {
        (<HTMLElement>el).classList.remove('darkMode');
        (<HTMLElement>el).classList.add('lightMode');
      });
    } else {
      element.querySelectorAll('.lightMode').forEach((el) => {
        (<HTMLElement>el).classList.remove('lightMode');
        (<HTMLElement>el).classList.add('darkMode');
      });
    }
  }
}
