import { AfterViewChecked, Component, ElementRef, OnInit } from '@angular/core';
import { LightDarkModeService } from '../shared/light-dark-mode.service';
import { ExperienceService } from './experience.service';
import { Job } from './job.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  providers: [ExperienceService],
})
export class ExperienceComponent implements OnInit, AfterViewChecked {
  jobs!: Job[];
  darkMode = false;

  constructor(
    private experienceService: ExperienceService,
    private serviceMode: LightDarkModeService,
    private elemetRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.experienceService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }

  ngAfterViewChecked(): void {
    this.serviceMode.actualMode.subscribe((darkMode) => {
      this.serviceMode.setTheme(darkMode, this.elemetRef.nativeElement);
    });
  }
}
