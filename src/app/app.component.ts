import { Component, ElementRef, OnInit } from '@angular/core';
import { LightDarkModeService } from './shared/light-dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'me-app';

  constructor(
    private serviceMode: LightDarkModeService,
    private elemetRef: ElementRef
  ) {}

  ngOnInit() {
    this.serviceMode.actualMode.subscribe((darkMode) => {
      this.serviceMode.setTheme(darkMode, this.elemetRef.nativeElement);
    });
  }
}
