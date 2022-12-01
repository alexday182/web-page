import { Component, OnInit } from '@angular/core';
import { LightDarkModeService } from '../shared/light-dark-mode.service';

@Component({
  selector: 'app-light-dark-mode',
  templateUrl: './light-dark-mode.component.html',
  styleUrls: ['./light-dark-mode.component.css'],
})
export class LightDarkModeComponent implements OnInit {
  darkMode = true;
  constructor(private serviceMode: LightDarkModeService) {}
  changeMode() {
    this.darkMode = !this.darkMode;
    this.serviceMode.changeMode(this.darkMode);
  }
  ngOnInit(): void {}
}
